// Author Douglas Pattison//
//Created 2-19-2022//



//Defining Variables//
var myTransport = ["bike ", "car " , "plane " , "train ", "skateboard "];

var myMainRide = {
    make: "Audi",
    model: "A4",
    color: "Silver",
    year: "2012",
    age: function() {
        return 2021 - age;
    }
}

//output//

document.write("My Transport: ", myTransport, "</br>");
document.write("my Main ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
