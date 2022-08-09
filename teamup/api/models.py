from django.db import models
from distutils.command.upload import upload
from django.db import models
from django.contrib.auth import get_user_model
import uuid
from datetime import datetime

class Post(models.Model):
    title = models.CharField(max_length=50, null=True, blank=True)
    body = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True) 
    created = models.DateTimeField(auto_now_add=True)

User = get_user_model()
# Create your models here.
class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    bio = models.CharField(max_length=100, null=False, blank=True)
    location = models.CharField(max_length=100, null=False, blank=True)
    #uid = models.IntegerField(default=uuid.uuid4())
    profile_img = models.ImageField(upload_to='profile_images', default='blank_profile.webp')

    def __str__(self):
        return self.user.username