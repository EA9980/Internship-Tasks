from django.shortcuts import render, redirect
from .models import Student

def form_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']

        Student.objects.create(
            username=username,
            email=email,
            password=password
        )

        return redirect('display')

    return render(request, 'form.html')


def display_view(request):
    data = Student.objects.all()
    return render(request, 'display.html', {'data': data})
