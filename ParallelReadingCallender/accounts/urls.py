from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView


urlpatterns = [
    path('',include('dj_rest_auth.urls')),
    path('',include('dj_rest_auth.registration.urls')),
]