from django.urls import path, include
from .views import postView, currentUserView, apiView, usersView
from django.views.generic.base import RedirectView


urlpatterns = [
    path('', apiView , name='redirect'),
    path("posts", postView, name="getPosts"),
    path("current-user", currentUserView, name="current-user"),
    path("users", usersView, name="users"),
]