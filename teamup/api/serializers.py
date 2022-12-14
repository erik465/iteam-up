from importlib.metadata import files
from pyexpat import model
from rest_framework.serializers import ModelSerializer
from .models import Post, Profile
from django.contrib.auth.models import User


class CurrentUserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class GenericUserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'id')

class PostSerializer (ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class ProfileSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

        