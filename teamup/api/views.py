from django.shortcuts import render
from .models import Post, Profile
from .serializers import PostSerializer, CurrentUserSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['GET'])
def getPosts(request):
    posts = Post.objects.all()
    post_Serializer = PostSerializer(posts, many=True)
    return Response(post_Serializer.data)

@api_view(['GET'])
def getCurrentUser(request):
    currentUser = request.user
    serializer = CurrentUserSerializer(currentUser)
    return Response(serializer.data)