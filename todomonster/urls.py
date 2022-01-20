from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework.authtoken import views

from rest_framework.routers import DefaultRouter
from userapp.views import UserViewSet
from todoapp.views import ToDoViewSet, ProjectViewSet


router = DefaultRouter()
router.register('users', UserViewSet)
router.register('todos', ToDoViewSet)
router.register('projects', ProjectViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    path('api-token-auth/', views.obtain_auth_token),
    # re_path(r'^api/(?P<version>.\d)', UserViewSet.as_view({'get': 'list'})),
    # path('api/users/v1', include('userapp.urls', namespace='v1')),
    # path('api/users/v2', include('userapp.urls', namespace='v2'))
]
