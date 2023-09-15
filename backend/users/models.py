from django.db import models
from django.contrib.auth.models import AbstractUser
from .manager import UserManager

class CustomUser(AbstractUser):
    username = models.CharField(max_length=200, unique=True)
    phone_number = models.CharField(max_length=20, null=True, blank=True)
    email = models.EmailField(blank=True, max_length=100)
    profile_image = models.ImageField(blank=True, upload_to='profile')
    
    is_buyer = models.BooleanField(default=True)
    is_seller = models.BooleanField(default=False)
    is_reseller = models.BooleanField(default=False)
    is_all = models.BooleanField(default=False)
    
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []
    objects = UserManager()
    

    def __str__(self):
        return self.username