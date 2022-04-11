/**
 * Author: Douglas Pattison
 * Created:4/5/2021
 **/

 //Create a constructor for vehicles called Vehicle, including make, model, year, color, and extras.
 function Vehicle(make, model, year, color, extras) {
   this.myMake = make;
   this.myModel = model;
   this.myYear = year;
   this.myColor = color;
   this.myExtras = extras;
   this.info = function() {
     return (this.myMake +
     " "+ this.myModel +
     " " + this.myYear +
     " is " + this.myColor +
     " and " + this.myExtras);
   };
 }
 var outputDiv = document.getElementById("output");

 //
 vehicles = [];
 var Audi = new Vehicle("Audi", "A4", "2009 car", "silver", "this is the current car Douglas owns.");
 vehicles.push(Audi);
 var Bike = new Vehicle("Bike", "cruiser", "2000 bike", "orange", "this is the current bike Douglas owns.");
  vehicles.push(Bike);

 for (i=0; i<vehicles.length;i++) {
   outputDiv.innerText += vehicles[i].info() + "\n"
 }
