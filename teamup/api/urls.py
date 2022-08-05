from django.urls import path, include
from .views import getPosts
from django.views.generic.base import RedirectView


urlpatterns = [
    path('', RedirectView.as_view(url="notes"), name='redirect'),
    path("notes", getPosts, name="getPosts")
]