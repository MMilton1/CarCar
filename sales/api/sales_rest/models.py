from django.db import models

from django.urls import reverse

import datetime


class AutomobileVO(models.Model):
    vin = models.CharField(max_length = 17, unique = True)
    sold = models.BooleanField(default = False)


class Salesperson(models.Model):
    first_name = models.CharField(max_length = 100)
    last_name = models.CharField(max_length = 100)
    employee_id = models.CharField(max_length = 100, unique = True)


class Customer(models.Model):
    first_name = models.CharField(max_length = 100)
    last_name = models.CharField(max_length = 100)
    address = models.CharField(max_length = 100)
    phone_number = models.CharField(max_length = 15)


class Sale(models.Model):
    price = models.DecimalField(max_digits=10, decimal_places=2)
    date_of_sale = models.DateTimeField(auto_now_add = True)
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sales",
        on_delete=models.CASCADE,
    )
    salesperson = models.ForeignKey(
        Salesperson,
        related_name="sales",
        on_delete=models.CASCADE
    )
    customer = models.ForeignKey(
        Customer,
        related_name="purchases",
        on_delete=models.CASCADE,
    )

    def get_api_url(self):
        return reverse("api_show_sale", kwargs={"pk": self.pk})

    def __str__(self):
        return str(self.price)

