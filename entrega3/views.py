from django.shortcuts import render, HttpResponse
# Agregado HttpResponse revisar sin funcona de lo contrario eliminar
# 

# Create your views here.
def home(request):
    return render(request, 'entrega3/home.html')

# agrengando segundo template al view 
def formulario(request):
    return render(request, 'entrega3/formulario.html')

def editar_noticia(request):
    return render(request, 'entrega3/editar_noticia.html')