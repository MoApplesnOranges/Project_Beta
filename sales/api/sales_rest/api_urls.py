from django.contrib import admin
from django.urls import path, include
from .api_views import (
    api_list_salespeople,
    api_list_customers,
    api_list_sales,
    api_delete_salesperson,
    api_delete_customer,
    api_delete_sale,
    api_unsold_automobiles,
)

urlpatterns = [
    path(
        "salespeople/",
        api_list_salespeople,
        name="api_list_salespeople",
    ),
    path(
        "salespeople/<int:pk>/",
        api_delete_salesperson,
        name="api_delete_salesperson",
    ),
    path(
        "customers/",
        api_list_customers,
        name="api_list_customers",
    ),
    path(
        "customers/<int:pk>/",
        api_delete_customer,
        name="api_delete_customer",
    ),
    path(
        "sales/",
        api_list_sales,
        name="api_list_sales",
    ),
    path(
        "sales/<int:pk>/",
        api_delete_sale,
        name="api_delete_sale",
    ),
    path(
        "unsold_automobiles/",
        api_unsold_automobiles,
        name="api_unsold_automobiles",
    ),
]
