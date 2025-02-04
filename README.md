<div align="center">

  <h2 style="margin-bottom: 10px;">🚗 CarCar: <span style="margin-left: 10px;">Driving Automotive Innovation</span></h1>
</div>

## Team:

- \*\*Person 1 - Murray Milton - Service
- \*\*Person 2 - Justin Leopard - Sales

## Design

CarCar is an application designed for the management of automobile dealerships. At its core are three pivotal microservices: Inventory, Service Center, and Sales Center. The integrated microservices deliver a comprehensive and efficient platform that empowers automotive businesses to thrive in the digital age.

## Built With

The project leverages powerful technologies and libraries:

- Front-end: We leverage the power of React, a leading JavaScript library, to create a modern and user-friendly interface that enhances user engagement and satisfaction.
  ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white)

- Back-end: CarCar is built on Django, a high-performance Python web framework, ensuring a secure, scalable, and efficient server-side architecture.
  ![Python](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white)
  ![Django](https://img.shields.io/badge/-Django-092E20?style=flat-square&logo=django&logoColor=white)

- Database: We rely on PostgreSQL, a trusted and robust relational database management system, to store and manage vast amounts of data, ensuring data integrity and reliability.
  ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white)

### How To Run Application :whale:

![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white)

Follow these steps to get the application up and running on your local machine:

- **Open your terminal.**
- **Go to the directory you would like to clone the project into**
- **Clone the repo: [Git Clone Here](https://gitlab.com/justinleopard/project-beta.git)**
- **Make sure to change directory**
- **Ensure that your Docker Desktop Application is open**
- **Run the following commands in Sequence**
  '''
  **docker volume create beta-data**
  **docker-compose build**
  **docker-compose up**
  '''

## Service microservice

## Capabilities:

- View Appointments: You can view a list of service appointments and check the VIP status of vehicles.
- Service Appointment History: You can access the service appointment history of a vehicle by searching using its unique VIN number.
- Create Appointments: Easily create a new service appointment by providing essential details like VIN, appointment date and time, technician selection, and a specific reason for the service.
- Create Technicians: Add technicians to your service center by providing their names and employee numbers.

## Models:

- AutomobileVo Model: This model fetches automobile data from the Inventory API and includes information about VIN.
- Technician Model: It represents technicians and includes their name and employee number information.
- Appointment Model: This model represents service appointments and includes details such as customer, VIN, technician, date/time, VIP status, reason, and appointment status (finished or not).

The Service microservice ensures that every aspect of the automobile servicing is managed with precision and care. It allows technicians to manage services ranging from appointment scheduling, track maintenance of automobile inventory within our fleet, and keep customer service at the forefront of our organization.

## Sales microservice

## Capabilities:

- View Salespeople: You can view a list of salespeople
- View Salespeople Sales History: You can select a salesperson from a dropdown box and see a list of sales that salesperson has made, the customer, automobile, price, and date.
- Add a salesperson: You can add a new salesperson with first name, last name, and employee ID.
- View a list of all sales: You can view a comprehensive list of all sales that have been made between all salespeople, viewing the salesperson, customer, automobile, and price.
- Record a new sale: You can easily record a new sale inputting the automobile VIN, salesperson, customer, and price.
- View list of all customers: You can view a comprehensive list of all customers added to the database including their first name, last name, phone number, and address.
- Add a customer: You can add a customer to the database with first name, last name, address, and phone number.

## Models:

- AutomobileVO Model: This model fetches automobile data from the Inventory API and includes information about VIN.
- Salesperson Model: Represents salespeople and includes their name and employee number.
- Customer Model: Represents customers and includes their name, address, and phone number.
  -Sale Model: This models represents sales and includes the price of the sale, the date/time the sale took place, the automobile in question, the salesperson for the sale, and the customer making the purchase.

The Sales microservice ensures that every aspect of sales management is managed with precision and care. It allows salespeople to manage sales ranging from customer management, tracking of sales of automobile inventory within our fleet, and keep customer service at the forefront of our organization.

## Domain Driven Design Overlay

CarCar is made up of 3 microservices which interact with one another.

- **Inventory**
- **Services**
- **Sales**
  ![Excalidraw Diagram](https://i.imgur.com/ed41vTt.jpg)

## Integration: Crafting Teamwork at **CarCar**

At **CarCar**, our integration philosophy is all about seamless collaboration among our core domains: Inventory, Sales, and Service. This trio forms the backbone of our operations, ensuring a synchronized flow of information and services that powers our business.

### How It All Comes Together

The journey begins in the Inventory domain, where we meticulously maintain records of the automobiles present on our lot, ready for their new owners. This inventory acts as the source of truth for our Sales and Service domains.

To bridge the gap between knowing what's available and what's sold or serviced, we employ a robust **poller mechanism**. This poller diligently communicates with the Inventory domain, fetching and updating the Sales and Service teams with the latest inventory data. This ensures that both teams have real-time access to vehicle availability, enabling them to serve our customers efficiently and effectively.

Through this integrated approach, we ensure that **CarCar** stands as a testament to what true teamwork can achieve, offering an unparalleled car buying and servicing experience.

## Accessing Endpoints to Send and View Data: Access Through Insomnia & Your Browser

### Manufacturers:

| Action                         | Method | URL                                         |
| ------------------------------ | ------ | ------------------------------------------- |
| List manufacturers             | GET    | http://localhost:8100/api/manufacturers/    |
| Create a manufacturer          | POST   | http://localhost:8100/api/manufacturers/    |
| Get a specific manufacturer    | GET    | http://localhost:8100/api/manufacturers/id/ |
| Update a specific manufacturer | PUT    | http://localhost:8100/api/manufacturers/id/ |
| Delete a specific manufacturer | DELETE | http://localhost:8100/api/manufacturers/id/ |

JSON body to send data:

Create and Update a manufacturer (SEND THIS JSON BODY):

- You cannot make two manufacturers with the same name

```
{
  "name": "Chrysler"
}
```

The return value of creating, viewing, updating a single manufacturer:

```
{
	"href": "/api/manufacturers/2/",
	"id": 2,
	"name": "Chrysler"
}
```

Getting a list of manufacturers return value:

```
{
  "manufacturers": [
    {
      "href": "/api/manufacturers/1/",
      "id": 1,
      "name": "Daimler-Chrysler"
    }
  ]
}
```

### Vehicle Models:

| Action                          | Method | URL                                  |
| ------------------------------- | ------ | ------------------------------------ |
| List vehicle models             | GET    | http://localhost:8100/api/models/    |
| Create a vehicle model          | POST   | http://localhost:8100/api/models/    |
| Get a specific vehicle model    | GET    | http://localhost:8100/api/models/id/ |
| Update a specific vehicle model | PUT    | http://localhost:8100/api/models/id/ |
| Delete a specific vehicle model | DELETE | http://localhost:8100/api/models/id/ |

Create and update a vehicle model (SEND THIS JSON BODY):

```
{
  "name": "Sebring",
  "picture_url": "image.yourpictureurl.com"
  "manufacturer_id": 1
}
```

Updating a vehicle model can take the name and/or picture URL:

```
{
  "name": "Sebring",
  "picture_url": "image.yourpictureurl.com"
}
```

Return value of creating or updating a vehicle model:

- This returns the manufacturer's information as well

```
{
  "href": "/api/models/1/",
  "id": 1,
  "name": "Sebring",
  "picture_url": "image.yourpictureurl.com",
  "manufacturer": {
    "href": "/api/manufacturers/1/",
    "id": 1,
    "name": "Daimler-Chrysler"
  }
}
```

Getting a List of Vehicle Models Return Value:

```
{
  "models": [
    {
      "href": "/api/models/1/",
      "id": 1,
      "name": "Sebring",
      "picture_url": "image.yourpictureurl.com",
      "manufacturer": {
        "href": "/api/manufacturers/1/",
        "id": 1,
        "name": "Daimler-Chrysler"
      }
    }
  ]
}
```

### Automobiles:

- The **'vin'** at the end of the detail urls represents the VIN for the specific automobile you want to access. This is not an integer ID. This is a string value so you can use numbers and/or letters.

| Action                       | Method | URL                                        |
| ---------------------------- | ------ | ------------------------------------------ |
| List automobiles             | GET    | http://localhost:8100/api/automobiles/     |
| Create an automobile         | POST   | http://localhost:8100/api/automobiles/     |
| Get a specific automobile    | GET    | http://localhost:8100/api/automobiles/vin/ |
| Update a specific automobile | PUT    | http://localhost:8100/api/automobiles/vin/ |
| Delete a specific automobile | DELETE | http://localhost:8100/api/automobiles/vin/ |

Create an automobile (SEND THIS JSON BODY):

- You cannot make two automobiles with the same vin

```
{
  "color": "red",
  "year": 2012,
  "vin": "1C3CC5FB2AN120174",
  "model_id": 1
}
```

Return Value of Creating an Automobile:

```
{
	"href": "/api/automobiles/1C3CC5FB2AN120174/",
	"id": 1,
	"color": "red",
	"year": 2012,
	"vin": "777",
	"model": {
		"href": "/api/models/1/",
		"id": 1,
		"name": "R8",
		"picture_url": "image.yourpictureurl.com",
		"manufacturer": {
			"href": "/api/manufacturers/1/",
			"id": 1,
			"name": "Audi"
		}
	}
}
```

To get the details of a specific automobile, you can query by its VIN:
example url: http://localhost:8100/api/automobiles/1C3CC5FB2AN120174/

Return Value:

```
{
  "href": "/api/automobiles/1C3CC5FB2AN120174/",
  "id": 1,
  "color": "green",
  "year": 2011,
  "vin": "1C3CC5FB2AN120174",
  "model": {
    "href": "/api/models/1/",
    "id": 1,
    "name": "Sebring",
    "picture_url": "image.yourpictureurl.com",
    "manufacturer": {
      "href": "/api/manufacturers/1/",
      "id": 1,
      "name": "Daimler-Chrysler"
    }
  }
}
```

You can update the color and/or year of an automobile (SEND THIS JSON BODY):

```
{
  "color": "red",
  "year": 2012
}
```

Getting a list of Automobile Return Value:

```
{
  "autos": [
    {
      "href": "/api/automobiles/1C3CC5FB2AN120174/",
      "id": 1,
      "color": "yellow",
      "year": 2013,
      "vin": "1C3CC5FB2AN120174",
      "model": {
        "href": "/api/models/1/",
        "id": 1,
        "name": "Sebring",
        "picture_url": "image.yourpictureurl.com",
        "manufacturer": {
          "href": "/api/manufacturers/1/",
          "id": 1,
          "name": "Daimler-Chrysler"
        }
      }
    }
  ]
}
```

# Sales Microservice

On the backend, the sales microservice has 4 models: AutomobileVO, Customer, Salesperson, and Sale. Sale is the model that interacts with the other three models. This model gets data from the three other models.

The AutomobileVO is a value object that gets data about the automobiles in the inventory using a poller. The sales poller automotically polls the inventory microservice for data, so the sales microservice is constantly getting the updated data.

The reason for integration between these two microservices is that when recording a new sale, you'll need to choose which car is being sold and that information lives inside of the inventory microservice.

## Accessing Endpoints to Send and View Data - Access through Insomnia:

### Customers:

| Action                   | Method | URL                                     |
| ------------------------ | ------ | --------------------------------------- |
| List customers           | GET    | http://localhost:8090/api/customers/    |
| Create a customer        | POST   | http://localhost:8090/api/customers/    |
| Show a specific customer | GET    | http://localhost:8090/api/customers/id/ |

To create a Customer (SEND THIS JSON BODY):

```
{
	"name": "John Johns",
	"address": "1212 Ocean Street",
	"phone_number": 9804357878
}
```

Return Value of Creating a Customer:

```
{
	"id: "1",
	"name": "John Johns",
	"address": "1212 Ocean Street",
	"phone_number": 9804357878
}
```

Return value of Listing all Customers:

```
{
	"customers": [
		{
			"id",
			"name": "Martha Stewart",
			"address": "1313 Baker Street",
			"phone_number": "980720890"
		},
		{
			"id",
			"name": "John Johns",
			"address": "1212 Ocean Street",
			"phone_number": "9804357878"
		}
	]
}
```

### Salespeople:

| Action               | Method | URL                                       |
| -------------------- | ------ | ----------------------------------------- |
| List salespeople     | GET    | http://localhost:8090/api/salespeople/    |
| Salesperson details  | GET    | http://localhost:8090/api/salesperson/id/ |
| Create a salesperson | POST   | http://localhost:8090/api/salespeople/    |
| Delete a salesperson | DELETE | http://localhost:8090/api/salesperson/id/ |

To create a salesperson (SEND THIS JSON BODY):

```
{
	"name": "Jane Doe",
	"employee_number": 1
}
```

Return Value of creating a salesperson:

```
{
	"id": 1,
	"name": "Liz",
	"employee_number": 1
}
```

List all salespeople Return Value:

```
{
	"salespeople": [
		{
			"id": 1,
			"name": "Jane Doe",
			"employee_number": 1
		}
	]
}
```

### Salesrecords:

- the id value to show a salesperson's salesrecord is the **"id" value tied to a salesperson.**

| Action                          | Method | URL                                        |
| ------------------------------- | ------ | ------------------------------------------ |
| List all salesrecords           | GET    | http://localhost:8090/api/salesrecords/    |
| Create a new sale               | POST   | http://localhost:8090/api/salesrecords/    |
| Show salesperson's salesrecords | GET    | http://localhost:8090/api/salesrecords/id/ |

List all Salesrecords Return Value:

```
{
	"sales": [
		{
			"id": 1,
			"price": 111000,
			"vin": {
				"vin": "111"
			},
			"salesperson": {
				"id": 1,
				"name": "Liz",
				"employee_number": 1
			},
			"customer": {
				"name": "Martha Stewart",
				"address": "1313 Baker Street",
				"phone_number": "980720890"
			}
		}
	]
}
```

Create a New Sale (SEND THIS JSON BODY):

```
{
	"salesperson": "Liz",
	"customer": "John Johns",
	"vin": "888",
	"price": 40000
}
```

Return Value of Creating a New Sale:

```
{
	"id": 4,
	"price": 40000,
	"vin": {
		"vin": "888"
	},
	"salesperson": {
		"id": 1,
		"name": "Liz",
		"employee_number": 1
	},
	"customer": {
		"id",
		"name": "John Johns",
		"address": "1212 Ocean Street",
		"phone_number": "9804357878"
	}
}
```

Show a Salesperson's Salesrecord Return Value:

```
{
	"id": 1,
	"price": 111000,
	"vin": {
		"vin": "111"
	},
	"salesperson": {
		"id": 1,
		"name": "Liz",
		"employee_number": 1
	},
	"customer": {
		"id",
		"name": "Martha Stewart",
		"address": "1313 Baker Street",
		"phone_number": "980720890"
	}
}
```

# Service microservice

Hello and welcome to the wonderful world of service!!
As explained above, the service microservice is an extension of the dealership that looks to provide service repairs for your vehicle.

As automobiles are purchased, we keep track of the vin number of each automobile and you are able to receive the special perks of being a VIP!
As a VIP, you will receive free oil changes for life, complimentary neck massages while in our waiting room, and free car washes whenever you would like!

This area is going to be broken down into the various API endpoints (Fancy way of saying your web address url) for service along with the format needed to send data to each component.
The basics of service are as follows:

1. Our friendly technician staff
2. Service Appointments

### Technicians - The heart of what we do here at CarCar

(We are considering renaming, don't worry)

| Action              | Method | URL                                             |
| ------------------- | ------ | ----------------------------------------------- |
| List technicians    | GET    | http://localhost:8080/api/technicians/          |
| Technician detail   | GET    | http://localhost:8080/api/technicians/<int:pk>/ |
| Create a technician | POST   | http://localhost:8080/api/technicians/          |
| Delete a technician | DELETE | http://localhost:8080/api/technicians/<int:pk>/ |

LIST TECHNICIANS: Following this endpoint will give you a list of all technicians that are currently employed.
Since this is a GET request, you do not need to provide any data.

```
Example:
{
	"technicians": [
		{
			"name": "Donald",
			"employee_number": 1,
			"id": 1
		},
```

TECHNICIAN DETAIL: This is a GET request as well, so no data needs to be provided here either. When you list technicians, you will
see that they are assigned a value of "id". This is the value that will replace "<int:pk>. For example, if you wanted to see the technician
details related to our technician "Donald", you would input the following address: http://localhost:8080/api/technicians/1/
This would then lead to this:

```
{
	"name": "Donald",
	"employee_number": 1,
	"id": 1
}
```

This how our technician detail is displayed. If you want to change the technician, just change the value at the end to match the "id" of the technician you want to display.

CREATE TECHNICIAN - What if we hired a new technician (In this economy even)? To create a technician, you would use the following format to input the data and you would just submit this as a POST request.

```
{
	"name": "Liz",
	"employee_number": 2
}
```

As you can see, the data has the same format. In this example, we just changed the "name" field from "Donald" to "Liz". We also assigned her the "employee_number" value of "2" instead of "1".
Once we have the data into your request, we just hit "Send" and it will create the technician "Liz". To verify that it worked, just select follow the "LIST TECHNICIAN" step from above to show all technicians.
With any luck, both Donald and Liz will be there.
Here is what you should see if you select "LIST TECHNICIAN" after you "CREATE TECHNICIAN" with Liz added in:

```
{
  "technicians": [
    {
      "name": "Jordan",
      "employee_number": 3,
      "id": 3
    },
    {
      "name": "Mia",
      "employee_number": 4,
      "id": 4
    }
  ]
}

```

DELETE TECHNICIAN - If we decide to "go another direction" as my first boss told me, then we need to remove the technician from the system. To do this, you just need to change the request type to "DELETE" instead of "POST". You also need to pull the "id" value just like you did in "TECHNICIAN DETAIL" to make sure you delete the correct one. Once they are "promoted to customer" they will no longer be in our page that lists
all technicians.

And that's it! You can view all technicians, look at the details of each technician, and create technicians.
Remember, the "id" field is AUTOMATICALLY generated by the program. So you don't have to input that information. Just follow the steps in CREATE TECHNICIAN and the "id" field will be populated for you.
If you get an error, make sure your server is running and that you are feeding it in the data that it is requesting.
If you feed in the following:

```
{
	"name": "Liz",
	"employee_number": 3,
	"favorite_food": "Tacos"
}

You will get an error because the system doesn't know what what to do with "Tacos" because we aren't ever asking for that data. We can only send in data that Json is expecting or else it will get angry at us.

```

### Service Appointments: We'll keep you on the road and out of our waiting room

Below are the API endpoints designed to manage service appointments for automobiles. These endpoints allow you to list all service appointments, view details of specific appointments, view the service history optionally filtered by VIN, create new service appointments, and delete existing appointments.

| Action                               | Method | URL                                                           |
| ------------------------------------ | ------ | ------------------------------------------------------------- |
| List service appointments            | GET    | http://localhost:8080/api/appointments/                       |
| Create a service appointment         | POST   | http://localhost:8080/api/appointments/                       |
| Delete a service appointment         | DELETE | http://localhost:8080/api/appointments/:id/                   |
| Set appointment status to "canceled" | PUT    | http://localhost:8080/api/appointments/:id/cancel/            |
| Set appointment status to "finished" | PUT    | http://localhost:8080/api/appointments/:id/finish/            |
| List technicians                     | GET    | http://localhost:8080/api/technicians/                        |
| Create a technician                  | POST   | http://localhost:8080/api/technicians/                        |
| Delete a specific technician         | DELETE | http://localhost:8080/api/technicians/:id/                    |
| Service appointment history          | GET    | http://localhost:8080/api/servicehistory/<int:vin (OPTIONAL)> |

Note: Replace `:id` with the actual ID of the service appointment or technician you wish to interact with. For viewing the service appointment history, you can optionally append a VIN to filter the history by a specific vehicle.

LIST SERVICE APPOINTMENT: This will return a list of all current service appointment.
This is the format that will be displayed.
Spoiler alert! Remember, the way that it is returned to you is the way that the data needs to be accepted. Remember, the "id" is automatically generated, so you don't need to input that.
Also, the "date" and "time" fields HAVE TO BE IN THIS FORMAT

```
{
	"service_appointment": [
		{
			"id": 1,
			"vin": "1222",
			"customer_name": "Barry",
			"time": "12:30:00",
			"date": "2021-07-14",
			"reason": "mah tires",
			"vip_status": false,
			"technician": "Liz"
}]},
```

SERVICE APPOINTMENT DETAIL: This will return the detail of each specific service appointment.

```
{
	"id": 1,
	"vin": "1222",
	"customer_name": "Barry",
	"time": "12:30:00",
	"date": "2021-07-14",
	"reason": "mah tires",
	"vip_status": false,
	"technician": "Liz"
}
```

SERVICE APPOINTMENT HISTORY: This will show the detail based on the "VIN" that is input. You will see ALL service appointments for the vehicle associated with the "vin" that you input.
At the end of the URL, tack on the vin associated with the vehicle that you wish to view. If you leave this field blank, it will show all service history for all vehicles.

```
{
  "service_history": [
    {
      "id": 2,
      "vin": "3344",
      "customer_name": "Samantha",
      "time": "10:15:00",
      "date": "2023-08-21",
      "reason": "oil change",
      "vip_status": true,
      "technician": "Jake"
    },
    {
      "id": 7,
      "vin": "5566",
      "customer_name": "Raj",
      "time": "15:00:00",
      "date": "2023-09-15",
      "reason": "brake inspection",
      "vip_status": false,
      "technician": "Emily"
    }
  ]
}

```

If we add "1222" to the request (eg. http://localhost:8080/api/servicehistory/1222), then it will show the above. If you put a vin that does not exist in the system, it will return a blank list.

CREATE SERVICE APPOINTMENT - This will create a service appointment with the data input. It must follow the format. Remember, the "id" is automatically generated, so don't fill that in. To verify
that it was added, just look at your service appointment list after creating a service appointment and it should be there.

```
	{
  "id": 15,
  "vin": "5678",
  "customer_name": "Alexa",
  "time": "14:45:00",
  "date": "2023-10-05",
  "reason": "routine maintenance",
  "vip_status": true,
  "technician": "Morgan"
}


```

DELETE SERVICE APPOINTMENT - Just input the "id" of the service appointment that you want to delete at the end of the url. For example, if we wanted to delete the above service history appointment for Barry
because we accidently input his name as "Gary", we would just enter 'http://localhost:8080/api/appointment/6' into the field and send the request. We will receive a confirmation message saying that
the service appointment was deleted.
