from django.shortcuts import render, redirect
from .models import Post, Profile
from .serializers import PostSerializer, CurrentUserSerializer, GenericUserSerializer
from django.contrib.auth.models import User, auth
from django.contrib import messages
from rest_framework.response import Response
from rest_framework.decorators import api_view



@api_view(['GET'])
def apiView(request, *args, **kwargs):
    return Response('API works')

@api_view(['GET'])
def postView(request):
    posts = Post.objects.all()
    post_Serializer = PostSerializer(posts, many=True)
    return Response(post_Serializer.data)

@api_view(['GET'])
def currentUserView(request):
    if(request.method == 'GET'):
        currentUser = request.user
        serializer = CurrentUserSerializer(currentUser)
        return Response(serializer.data)
    

@api_view(['GET', 'POST'])
def usersView(request):
    if(request.method == 'GET'):
        users = User.objects.all()
        serializer = GenericUserSerializer(users, many=True)
        return Response(serializer.data)
        
    elif(request.method == 'POST'):
        data = request.data
        name = data['username']
        email = data['email']
        password = data['password']

        if User.objects.filter(username=name).exists():
            messages.error(request, 'Name already taken')
            return Response({'message':'Name already taken'})
        elif User.objects.filter(email=email).exists():
            messages.error(request, 'Email already taken')
            return Response({'message' : 'Email already taken'})
        else:
            user = User.objects.create_user(username=name, email=email, password=password)
            serializer = CurrentUserSerializer(instance=user, many=False)

            user_login = auth.authenticate(username=name, password=password)
            auth.login(request, user_login)

            return Response({'message':'Successful register!', 'user' : serializer.data})
