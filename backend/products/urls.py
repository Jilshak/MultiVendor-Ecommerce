from rest_framework.routers import DefaultRouter
from .models import *
from .views import *


router = DefaultRouter()
router.register('products', ProductViewSet, basename='product_view')
router.register('category', CategoriesViewSet, basename='category_view')
router.register('additionalInfo', AdditionalInfoViewSet, basename='additional_info')

urlpatterns = [
    
]

urlpatterns +=  router.urls
