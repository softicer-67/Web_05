from rest_framework import mixins, viewsets
from .serializers import UserSerializer
from .models import User
from rest_framework.permissions import DjangoModelPermissions, BasePermission, DjangoModelPermissionsOrAnonReadOnly


class UserViewSet(mixins.ListModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  viewsets.GenericViewSet):
    serializer_class = UserSerializer
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    queryset = User.objects.all()
