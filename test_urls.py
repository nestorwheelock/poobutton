"""
URL configuration for testing poobutton.
"""
from django.urls import path, include

urlpatterns = [
    path('poobutton/', include('poobutton.urls')),
]
