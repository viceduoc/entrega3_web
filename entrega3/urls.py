from django.conf.urls import url
from django.urls import path
from .views import home, formulario



# Agregando path's
urlpatterns = [
    path('', home, name="home"),
    path('formulario', formulario, name="formulario"),
]