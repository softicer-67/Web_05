from django.urls import path
from rest_framework import permissions

from .views import UserViewSet


app_name = 'userapp'
urlpatterns = [
    path('', UserViewSet.as_view({'get': 'users'})),
]

