from django.http import JsonResponse, HttpResponse
from django.views.decorators.http import require_http_methods
from django.core.exceptions import ValidationError
from django.shortcuts import get_object_or_404
from django.utils import timezone
from .models import AutomobileVO, Salesperson, Customer, Sale
from common.json import ModelEncoder
import json


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "sold"]

class SalespersonEncoder(ModelEncoder):
    model = Salesperson
    properties = ["first_name", "last_name", "employee_id"]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = ["first_name", "last_name", "address", "phone_number"]

class SaleEncoder(ModelEncoder):
    model = Sale
    properties = ["id", "price", "automobile", "salesperson", "customer", "date_of_sale"]
    encoders = {
        'automobile': AutomobileVOEncoder(),
        'salesperson': SalespersonEncoder(),
        'customer': CustomerEncoder()
    }


@require_http_methods(["GET", "POST"])
def api_salespeople(request):
    if request.method == 'GET':
        salespeople = Salesperson.objects.all()
        return JsonResponse(salespeople, encoder=SalespersonEncoder, safe=False)
    elif request.method == 'POST':
        try:
            data = json.loads(request.body)
            salesperson = Salesperson.objects.create(**data)
            return JsonResponse(salesperson, encoder=SalespersonEncoder, safe=False)
        except ValidationError as e:
            return HttpResponse(status=400)

@require_http_methods(["DELETE"])
def api_salespeople_delete(request, pk):
    salesperson = get_object_or_404(Salesperson, pk=pk)
    salesperson.delete()
    return HttpResponse(status=204)


@require_http_methods(["GET", "POST"])
def api_customers(request):
    if request.method == 'GET':
        customers = Customer.objects.all()
        return JsonResponse({'customers': customers}, encoder=CustomerEncoder, safe=False)
    elif request.method == 'POST':
        try:
            data = json.loads(request.body)
            customer = Customer.objects.create(**data)
            return JsonResponse(customer, encoder=CustomerEncoder, safe=False)
        except (ValueError, ValidationError) as e:
            return HttpResponse(status=400)

@require_http_methods(["DELETE"])
def api_customers_delete(request, pk):
    customer = get_object_or_404(Customer, pk=pk)
    customer.delete()
    return HttpResponse(status=204)

@require_http_methods(["GET", "POST"])
def api_sales(request):
    if request.method == 'GET':
        sales = Sale.objects.all()
        return JsonResponse({'sales': sales}, encoder=SaleEncoder, safe=False)
    elif request.method == 'POST':
        content = json.loads(request.body)
        try:
            automobile = AutomobileVO.objects.get(vin=content['automobile'])
            salesperson = Salesperson.objects.get(employee_id=content['salesperson'])
            customer = Customer.objects.get(phone_number=content['customer'])
            price = content['price']

            sale = Sale.objects.create(
                automobile=automobile,
                salesperson=salesperson,
                customer=customer,
                price=price,
                date_of_sale = timezone.now()
            )
            return JsonResponse(sale, encoder=SaleEncoder, safe=False)
        except AutomobileVO.DoesNotExist:
            return JsonResponse({"error": "Automobile not found"}, status=404)
        except Salesperson.DoesNotExist:
            return JsonResponse({"error": "Salesperson not found"}, status=404)
        except Customer.DoesNotExist:
            return JsonResponse({"error": "Customer not found"}, status=404)
        except KeyError as e:
            return JsonResponse({"error": f"Missing field: {str(e)}"}, status=400)


@require_http_methods(["DELETE"])
def api_sales_delete(request, pk):
    sale = get_object_or_404(Sale, pk=pk)
    sale.delete()
    return HttpResponse(status=204)
