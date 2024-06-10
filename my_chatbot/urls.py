from django.urls import path
from .views import *

urlpatterns=[
    path('',home,name="Home"),
    path('get_response/', get_response, name='get_response'),
]