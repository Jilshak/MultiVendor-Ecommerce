from rest_framework.serializers import ModelSerializer
from users.serializers import UserSerializer
from .models import Product, Categories, AddtionalInfo


class AdditionalInfoSerializer(ModelSerializer):
    class Meta:
        fields = '__all__'
        model = AddtionalInfo


class ProductSerializer(ModelSerializer):
    seller_details = UserSerializer(source='seller', read_only=True)
    additional_details = AdditionalInfoSerializer(source='additional_info', read_only=True)
    class Meta:
        fields = '__all__'
        model = Product


class CategoriesSerializer(ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Categories
