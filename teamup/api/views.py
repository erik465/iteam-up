import profile
from django.shortcuts import render, redirect
from .models import Post, Profile
from .serializers import PostSerializer, CurrentUserSerializer, GenericUserSerializer, ProfileSerializer
from django.contrib.auth.models import User, auth
from django.contrib import messages
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['name'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def apiView(request):
    return Response('API works')

@api_view(['GET'])
#@permission_classes([IsAuthenticated])
def postsView(request):
    posts = Post.objects.all()
    post_Serializer = PostSerializer(posts, many=True)
    return Response(post_Serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def currentUserView(request):
    if(request.method == 'GET'):
        currentUser = request.user
        serializer = GenericUserSerializer(currentUser)
        return Response(serializer.data)
    

@api_view(['GET', 'POST'])
#@permission_classes([IsAuthenticated])
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


@api_view(['GET'])
def profilesView(request):
    profiles = Profile.objects.all()
    profile_Serializer = ProfileSerializer(profiles, many=True)
    return Response(profile_Serializer.data)

@api_view(['GET', 'POST', 'PUT'])
@permission_classes([IsAuthenticated])
def profileView(request): 
    if request.method == 'GET':
        profile = Profile.objects.get(user=request.user)
        profile_Serializer = ProfileSerializer(profile, many=False)
        return Response(profile_Serializer.data)
    elif request.method == 'POST':
        print('USER: ' + str(request.user))
        data = request.data
        bio = data['bio']
        location = data['location']
        #profile_img = data['profile_img']
        if Profile.objects.filter(user=request.user).exists():
            return Response('user already exists')
        
        else:
            new_profile = Profile.objects.create(user=request.user, bio=bio, location=location)
            new_profile.save()
            profile_Serializer = ProfileSerializer(instance=new_profile, many=False)
            return Response(profile_Serializer.data)
        
    elif request.method == 'PUT':
        #print('FILES : ' + str(request.FILES))
        data = request.data
        profile = Profile.objects.get(user=request.user)
        profile_Serializer = ProfileSerializer(profile, data=data)

        if profile_Serializer.is_valid():
            profile_Serializer.save()
            print(profile_Serializer.data)
        
        return Response(profile_Serializer.data)



