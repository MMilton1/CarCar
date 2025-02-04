from django.db import models
from django.urls import reverse

# Create your models here.
# class Status(models.Model):
#     name = models.CharField(max_length=50, unique=True)

#     def __str__(self):
#         return self.name

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=30, unique=True)
    sold = models.BooleanField(default=False)

class Technician(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.PositiveIntegerField(null=True, unique=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


    def get_api_url(self):
        return reverse("list_technicians", kwargs={"pk": self.pk})

class Appointment(models.Model):
    date_time = models.DateTimeField()
    reason = models.TextField()
    status = models.CharField(max_length=80)
    vin = models.CharField(max_length=30, unique=True)
    customer = models.CharField(max_length=150, null=True)

    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE,
    )
    # status = models.ForeignKey(
    #     Status,
    #     related_name="appointments",
    #     on_delete=models.PROTECT,
    # )


# Set VIP status for order of the request:
    def cancel(self, id):
        status = Status.objects.get(id=id)
        self.status = status
        self.save()

    def finish(self, id):
        status = Status.objects.get(id=id)
        self.status = status
        self.save()

    def __str__(self):
        return self.customer

    class Meta:
        ordering = ("customer",)
