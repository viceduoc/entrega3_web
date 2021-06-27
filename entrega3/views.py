from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'entrega3/home.html')

# agrengando segundo template al view 
def formulario(request):
    return render(request, 'entrega3/formulario.html')