from django.shortcuts import render
from .models import Post, Profile
from .serializers import PostSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['GET'])# Create your views here.
def getPosts(request):
    posts = Post.objects.all()
    post_Serializer = PostSerializer(posts, many=True)
    return Response(post_Serializer.data)
