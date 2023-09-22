from django.db import models
import os
from users.models import CustomUser

# Create your models here.
class Categories(models.Model):
    category = models.CharField(max_length=200, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.category
    
def product_image_path(instance, filename):
    return os.path.join('product_images', str(instance.id), filename)


class AddtionalInfo(models.Model):
    ram = models.PositiveIntegerField(blank=True, null=True)
    rom = models.PositiveBigIntegerField(blank=True, null=True)
    size = models.CharField(max_length=100, blank=True, null=True)
    color = models.CharField(max_length=100, blank=True, null=True)
    
    def __str__(self):
        return self.ram

class Product(models.Model):
    title = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    image1 = models.ImageField(blank=True, null=True, upload_to=product_image_path)
    image2 = models.ImageField(blank=True, null=True, upload_to=product_image_path)
    image3 = models.ImageField(blank=True, null=True, upload_to=product_image_path)
    image4 = models.ImageField(blank=True, null=True, upload_to=product_image_path)
    price = models.PositiveIntegerField(blank=True, null=True)
    rating = models.PositiveIntegerField(blank=True, null=True)
    additional_info = models.ForeignKey(AddtionalInfo, on_delete=models.CASCADE, blank=True, null=True)
    number_of_reviews = models.PositiveIntegerField(blank=True, null=True, default=0)
    count_in_stock = models.PositiveIntegerField(blank=True, null=True, default=5)
    categories = models.ForeignKey(Categories, on_delete=models.CASCADE, blank=True, null=True)
    seller = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
