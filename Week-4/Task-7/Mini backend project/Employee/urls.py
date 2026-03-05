from django.urls import path
from . import views

urlpatterns = [

    path('', views.home, name='home'),

    path('register/', views.register, name='register'),
    path('login/', views.user_login, name='login'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('add/', views.add_employee, name='add'),
    path('edit/<int:id>/', views.edit_employee, name='edit'),
    path('delete/<int:id>/', views.delete_employee, name='delete'),

]
