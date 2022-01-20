from rest_framework import mixins, viewsets, generics
from .serializers import UserSerializer, UserSerializerWithFullName
from .models import User
from rest_framework.permissions import BasePermission, DjangoModelPermissionsOrAnonReadOnly, IsAuthenticated


class UserViewSet(mixins.ListModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  viewsets.GenericViewSet):
    # serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()

    def get_serializer_class(self):
        if self.request.version == 'v2':
            return UserSerializerWithFullName
        return UserSerializer


