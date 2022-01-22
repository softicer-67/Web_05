from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import ToDo, Project

# Register your models here.
admin.site.register(ToDo)
admin.site.register(Project)
