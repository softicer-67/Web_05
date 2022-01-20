from .models import User
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email']


class UserSerializerWithFullName(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['is_superuser', 'is_staff']
