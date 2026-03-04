from django.shortcuts import render, redirect
from .models import User

def login_view(request):

    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']

        user = User.objects.filter(username=username, password=password)

        if user.exists():
            return redirect('success')
        else:
            return render(request,'login.html',{'error':'Invali username or password'})

    return render(request,'login.html')


def success(request):
    return render(request,'success.html')
