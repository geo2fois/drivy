'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

//EXERCICE 1 - Euro-Kilometers

function CalculTime(entry){

        var pickup = new Date(entry.pickupDate);
        var ret = new Date(entry.returnDate);
        var Timeinsec = Math.abs(pickup - ret);
        var Timeinday = Timeinsec / (1000 * 60 * 60 * 24);
        //console.log("time", Timeinday);
        return Timeinday+1;
}

function CalculRentalPrice(rental) {
  rentals.forEach(function(entry) {
    console.log("_________________________");
    var Time = CalculTime(entry);
    console.log("Time :", Time);
    var carId = entry.carId;
    var reduction = 0;

    cars.forEach(function(value){
//EXERCICE 2 - Drive more, pay less --- BEGINNING
        if (Time>1 && Time<4){
            value.pricePerDay = value.pricePerDay - ((value.pricePerDay * 10) / 100);
        }
        else if (Time>=4 && Time<10){
            value.pricePerDay = value.pricePerDay - ((value.pricePerDay * 30) / 100);
        }
        else if (Time>=10){
            value.pricePerDay = value.pricePerDay - ((value.pricePerDay * 50) / 100);
        }
//EXERCICE 2 - Drive more, pay less --- ENDING

        if (value.id == carId){
            var rentalPrice = (value.pricePerDay * Time)  + (entry.distance * value.pricePerKm);
            console.log("The rental price is ", rentalPrice);




//EXERCICE 3 - - Give me all your money
        var commission = rentalPrice * 0.3;
        var insurance = commission * 0.5;
        var roadside_assistance = 1 * Time;
        var drivy = commission - insurance - roadside_assistance;
        console.log("commission:", commission);
        console.log("insurance:", insurance);
        console.log("roadside assistance:", roadside_assistance);
        console.log("drivy:", drivy);

//EXERCICE 4 - The famous deductible --- BEGINNING
        var priceAddition = 0;
        if (entry.options.deductibleReduction){
            console.log("Option: yes");
            var priceAddition = Time * 4;
            console.log("Price addition:", priceAddition);
        }
//EXERCICE 4 - The famous deductible --- ENDING

       }

    });

 });

}




console.log(CalculRentalPrice(rentals));
console.log("cars", cars);
console.log("rentals", rentals);
console.log("actors" , actors);