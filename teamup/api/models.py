from django.db import models

# Create your models here.
class Profile(models.Model):
    pass

class Post(models.Model):
    title = models.CharField(max_length=50, null=True, blank=True)
    body = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True) 
    created = models.DateTimeField(auto_now_add=True)