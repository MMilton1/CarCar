from django.urls import path
from . import views

urlpatterns = [
    # Salespeople URLs
    path('salespeople/', views.api_salespeople, name='api_salespeople'),
    path('salespeople/<int:pk>/', views.api_salespeople_delete, name='api_salespeople_delete'),

    # Customer URLs
    path('customers/', views.api_customers, name='api_customers'),
    path('customers/<int:pk>/', views.api_customers_delete, name='api_customers_delete'),

    # Sale URLs
    path('sales/', views.api_sales, name='api_sales'),
    path('sales/<int:pk>/', views.api_sales_delete, name='api_sales_delete'),
]

