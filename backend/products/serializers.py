from rest_framework.serializers import ModelSerializer
from .models import Product, Categories

class ProductSerializer(ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Product
        
class CategoriesSerializer(ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Categories