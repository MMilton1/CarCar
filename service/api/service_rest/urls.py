from django.urls import path
from .views import list_technicians, show_technician_details,list_appointments,show_appointments,cancel_appointment,appointment_completed

urlpatterns = [
    path("technicians/", list_technicians, name="list_technicians"),
    path("technicians/<int:pk>/", show_technician_details, name="show_technician_details"),
    path("appointments/", list_appointments, name="list_appointments"),
    path("appointments/<int:pk>/", show_appointments, name="show_appointments"),
    path("appointments/<int:pk>/cancel", cancel_appointment ,name="cancel_appointment"),
    path("appointments/<int:pk>/finish", appointment_completed, name="appointment_completed"),

]
