from django.urls import path, include
from .views import getPosts, getCurrentUser
from django.views.generic.base import RedirectView


urlpatterns = [
    path('', RedirectView.as_view(url="posts"), name='redirect'),
    path("posts", getPosts, name="getPosts"),
    path("current-user", getCurrentUser, name="")
]