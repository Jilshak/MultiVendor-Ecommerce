from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import *
from .models import Product, Categories, AddtionalInfo
# Create your views here.

class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    
class CategoriesViewSet(ModelViewSet):
    serializer_class = CategoriesSerializer
    queryset = Categories.objects.all()


class AdditionalInfoViewSet(ModelViewSet):
    serializer_class = AdditionalInfoSerializer
    queryset = AddtionalInfo.objects.all()