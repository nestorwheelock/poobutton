from django.urls import path
from . import views

app_name = 'poobutton'

urlpatterns = [
    path('', views.button_view, name='index'),
    path('press/', views.increment_press, name='press'),
    path('reset/', views.reset_view, name='reset'),
]
