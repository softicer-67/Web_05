from rest_framework import mixins, viewsets
from .serializers import UserSerializer
from .models import User
from rest_framework.permissions import BasePermission, DjangoModelPermissionsOrAnonReadOnly, IsAuthenticated


class UserViewSet(mixins.ListModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  viewsets.GenericViewSet):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
