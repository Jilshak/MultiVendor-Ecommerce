from rest_framework.routers import DefaultRouter
from .models import *
from .views import *


router = DefaultRouter()
router.register('products', ProductViewSet, basename='product_view')
router.register('categories', CategoriesViewSet, basename='category_view')

urlpatterns = [
    
]

urlpatterns +=  router.urls
