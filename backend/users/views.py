from rest_framework.viewsets import ModelViewSet
from .serializers import UserSerializer
from .models import CustomUser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = CustomUser.objects.all()
    

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['is_superuser'] = user.is_superuser
        token['is_buyer'] = user.is_buyer
        token['is_seller'] = user.is_seller
        token['is_reseller'] = user.is_reseller
        token['is_all'] = user.is_all
        token['is_blocked'] = user.is_blocked
        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer