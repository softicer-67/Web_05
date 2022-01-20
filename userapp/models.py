# from django.db import models
# from django.contrib.auth.models import AbstractUser
#
#
# class User(AbstractUser):
#     email = models.CharField(max_length=250, unique=True)
#     name = None


from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class User(AbstractUser):
    email = models.CharField(max_length=255, unique=True)
