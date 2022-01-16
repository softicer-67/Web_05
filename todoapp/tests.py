import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User
from .views import ToDoViewSet
from .models import User, ToDo, Project


class TestTodoapp(TestCase):

    def test_create_guest(self):
        factory = APIRequestFactory()
        request = factory.post('/api/todos/', {'text': 'Написать тесты'}, format='json')
        view = ToDoViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_client_get_list(self):
        client = APIClient()
        admin = User.objects.create_superuser(username='admin_1', email='adm@mail.ru', password='qwerty')
        client.force_authenticate(user=admin)
        response = client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_project(self):
        factory = APITestCase()
        factory = APIRequestFactory()
        request = factory.post('/name/', {'title': 'new idea'})
