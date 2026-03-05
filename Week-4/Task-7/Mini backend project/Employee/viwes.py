from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login
from .models import Employee

from django.shortcuts import render,redirect


def home(request):
    return render(request,'home.html')
# Registration
def register(request):

    if request.method=="POST":

        username=request.POST['username']
        password=request.POST['password']

        User.objects.create_user(username=username,password=password)

        return redirect('/login/')

    return render(request,'register.html')


# Login
def user_login(request):

    if request.method=="POST":

        username=request.POST['username']
        password=request.POST['password']

        user=authenticate(request,username=username,password=password)

        if user:
            login(request,user)
            return redirect('/dashboard/')

    return render(request,'login.html')


# Dashboard
def dashboard(request):

    employees=Employee.objects.all()

    return render(request,'dashboard.html',{'employees':employees})


# Add Employee
def add_employee(request):

    if request.method=="POST":

        name=request.POST['name']
        email=request.POST['email']
        phone=request.POST['phone']
        department=request.POST['department']
        salary=request.POST['salary']

        Employee.objects.create(
        name=name,
        email=email,
        phone=phone,
        department=department,
        salary=salary
        )

        return redirect('/dashboard/')

    return render(request,'add_employee.html')


# Edit Employee
def edit_employee(request,id):

    emp=Employee.objects.get(id=id)

    if request.method=="POST":

        emp.name=request.POST['name']
        emp.email=request.POST['email']
        emp.phone=request.POST['phone']
        emp.department=request.POST['department']
        emp.salary=request.POST['salary']

        emp.save()

        return redirect('/dashboard/')

    return render(request,'edit_employee.html',{'emp':emp})


# Delete Employee
def delete_employee(request,id):

    emp=Employee.objects.get(id=id)

    emp.delete()

    return redirect('/dashboard/')
