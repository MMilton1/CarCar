from django.views.decorators.http import require_http_methods
import json
from django.http import JsonResponse, HttpResponseNotFound
from common.json import ModelEncoder
from .models import AutomobileVO, Appointment, Technician

# Create your views here.


# Added a Status Encoder to test:
# class StatusEncoder(ModelEncoder):
#     model = Status
#     properties = ["name"]


class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin",]

class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "first_name",
        "last_name",
        "employee_id",
    ]

class TechnicianDetailEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "first_name",
        "last_name",
        "employee_id",
    ]

class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "date_time",
        "reason",
        "status",
        "vin",
        "customer",
        "technician",
    ]

    encoders = {
        "technician": TechnicianDetailEncoder()
    }

class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id", 
        "date_time",
        "reason",
        "status",
        "vin",
        "customer",
        "technician"
    ]

    encoders = {
        "technician": TechnicianDetailEncoder(),
    }



@require_http_methods(["GET","POST"])
def list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians":technicians
        },encoder=TechnicianListEncoder, safe=False)
    else:
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(technician,encoder=TechnicianListEncoder,safe=False)



@require_http_methods(["GET","PUT","DELETE"])
def show_technician_details(request,pk):
    try:
        technician = Technician.objects.get(id=pk)
    except Technician.DoesNotExist:
        return HttpResponseNotFound("Invalid Technician ID")
    if request.method == "DELETE":
        technician.delete()
        return JsonResponse({"deleted":True})
    elif request.method == "GET":
        return JsonResponse(
            technician, encoder=TechnicianDetailEncoder,safe=False
        )
    else:
        content=json.loads(request.body)
        for key, value in content.items():
            setattr(technician,key,value)
        technician.save()
        return JsonResponse(
            technician, 
            encoder=TechnicianDetailEncoder, 
            safe=False)



@require_http_methods(["GET","POST"])
def list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse({
            "appointments": appointments
        }, encoder=AppointmentDetailEncoder, safe=False)
    else:
        content = json.loads(request.body)
        try:
            technician = Technician.objects.get(id=content["technician"])
            content["technician"] = technician
            content["status"] = "scheduled"
        except Technician.DoesNotExist:
            return JsonResponse({
                "Error": "Technician ID does not exist"
            }, status=400)
        appointment = Appointment.objects.create(**content)
        return JsonResponse(appointment,
        encoder=AppointmentDetailEncoder,
        safe=False
        )

@require_http_methods(["DELETE", "GET", "PUT"])
def show_appointments(request, pk):
    try:
        Appointment.objects.get(id=pk)
    except Appointment.DoesNotExist:
        return HttpResponseNotFound("Appointment ID could not be found")
    if request.method == "GET":
        appointment = Appointment.objects.get(id=pk)
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count,_ = Appointment.objects.filter(id=pk).delete()
        return JsonResponse({"delete": count > 0})
    else:
        content = json.loads(request.body)
        Appointment.objects.filter(id=pk).update(**content)
        appointment = Appointment.objects.get(id=pk)
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe= False,
        )

@require_http_methods(["PUT"])
def appointment_completed(request, pk):
        try:
            Appointment.objects.get(id=pk)
        except Appointment.DoesNotExist:
            return HttpResponseNotFound("Appointment ID Could not be found")
        appointment = Appointment.objects.get(id=pk)
        appointment.finish()
        print(JsonResponse(appointment, encoder=AppointmentDetailEncoder, safe=False))
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False,
        )

@require_http_methods(["PUT"])
def cancel_appointment(request, pk):
        try:
            Appointment.objects.get(id=pk)
        except Appointment.DoesNotExist:
            return HttpResponseNotFound("Appointment ID Not Found")
        appointment = Appointment.onjects.get(id=pk)
        appointment.cancel()
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False,
        )