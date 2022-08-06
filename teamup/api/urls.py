from django.urls import path, include
from .views import postView, currentUserView, apiView, usersView, MyTokenObtainPairView
from django.views.generic.base import RedirectView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)




urlpatterns = [
    path('', apiView , name='redirect'),
    path("posts", postView, name="getPosts"),
    path("current-user", currentUserView, name="current-user"),
    path("users", usersView, name="users"),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]