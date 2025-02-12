// Q1
// ADD
var num1= 3;
var num2= 5;
var result= num1 + num2;
document.write("Sum Of 3 and 5 is" + result + "<br/>");

// Q2
// SUBTRACTION
var num1= 3;
var num2= 5;
var result= num1 - num2;
document.write("Subtraction Of 3 and 5 is" + result + "<br/>");

// MULTIPLICATION
var num1= 3;
var num2= 5;
var result= num1 * num2;
document.write("Multiplication Of 3 and 5 is" + result + "<br/>");

//DIVISION
var num1= 3;
var num2= 5;
var result= num1 / num2;
document.write("Division Of 3 and 5 is" + result + "<br/>");

// MODULUS
var num1= 3;
var num2= 5;
var result= num1 % num2;
document.write("Modulus Of 3 and 5 is" + result + "<br/><br/>");

// Q3
var num;
document.write("Value After Variable Declaration Is" + num + "<br/>");

var num3 = 5;
document.write("Intial Value Is:" + num3 + "<br/>");

var num3 = ++num3;
document.write("Value After Increment Is:" + num3 + "<br/>");

var num3 = +7;
document.write("Value After Addition Is:" +num3 + "<br/>");

var num3 = --num3;
document.write("Value After Decrement Is:" +num3 + "<br/>");

var num3 = num3 % 3;
document.write("The Remainder Is:" +num3 + "<br/><br/>");

// Q4
var ticketPrice = 600;
var costOfBuying = 600 * 5 ;
document.write(`Total cost to buy 5 tickets to a movie is ${costOfBuying}PKR <br/><br/>`);

// Q5
document.write("<h1>Table of 4 </h1>");

var num1 = 4;

var result = num1 * 1;
document.write(`4x1= ${result} <br/>`);
var result = num1 * 2;


var num1 = 4;

var result = num1 * 2;
document.write(`4x2= ${result} <br/>`);
var result = num1 * 2;

var num1 = 4;

var result = num1 * 3;
document.write(`4x3= ${result} <br/>`);
var result = num1 * 3;

var num1 = 4;

var result = num1 * 4;
document.write(`4x4= ${result} <br/>`);
var result = num1 * 4;

var num1 = 4;

var result = num1 * 5;
document.write(`4x5= ${result} <br/>`);
var result = num1 * 5;

var num1 = 4;

var result = num1 * 6;
document.write(`4x6= ${result} <br/>`);
var result = num1 * 6;

var num1 = 4;

var result = num1 * 7;
document.write(`4x7= ${result} <br/>`);
var result = num1 * 7;

var num1 = 4;

var result = num1 * 8;
document.write(`4x8= ${result} <br/>`);
var result = num1 * 8;

var num1 = 4;

var result = num1 * 9;
document.write(`4x9= ${result} <br/>`);
var result = num1 * 9;

var num1 = 4;

var result = num1 * 10;
document.write(`4x10= ${result} <br/> <br/>`);
var result = num1 * 10;

// Q6
var tempCelsius = 25;
var convInToFahrenheit = (tempCelsius * 9/5) + 32;
document.write(`${tempCelsius}°C is ${convInToFahrenheit}°F <br/> `);
var tempFahrenheit = 70;
var convInToCelsius = (tempFahrenheit - 32) * 5/9 ;
document.write(`${tempFahrenheit}°F  is ${convInToCelsius}°C `);

// Q7
var priceOfItem1 = 650;
var priceOfItem2 = 100;
var orderedQuantityOfItem1 = 3;
var orderedQuantityOfItem2 = 7;
var shippingCharges = 100;
var totalCost = (priceOfItem1 * orderedQuantityOfItem1) + (priceOfItem2 * orderedQuantityOfItem2) + shippingCharges;
document.write("<h1>Shopping Cart</h1><br/>");
document.write(`Price of Item 1 is ${priceOfItem1} <br/>`);
document.write(`Quantity of Item 1 is ${orderedQuantityOfItem1} <br/>`);
document.write(`Price of Item 2 is ${priceOfItem2} <br/>`);
document.write(`Quantity of Item 2 is ${orderedQuantityOfItem2} <br/>`);
document.write(`Shipping Charges ${shippingCharges} <br/>`);
document.write(`Total cost of your order is ${totalCost} <br/><br/>`);

//Q8
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write(`<h1>Marks Sheet</h1>`);
document.write(`Total marks: ${totalMarks} <br/>`);
document.write(`Marks obtained: ${marksObtained} <br/>`);
document.write(`Percentage: ${percentage}% <br/><br/>`);

// Q9
var usDollar = 10;
var saudiRiyal = 25;
var pakToDollar = 10 * 104.80;
var pakToSaudiRiyal = 25 * 28;
var conToPkr = pakToDollar + pakToSaudiRiyal;
document.write("<h1>Currency in PKR</h1> <br/>");
document.write(`Total Curreny in PKR: ${conToPkr} <br/><br/>`);

// Q10
var num4 = 5;
var res = (((num4 + 5) * 10) / 2);
document.write(`Result :${res} <br/><br/>`);

// Q11
var currentYear = 2025;
var birthYear = 1999;
var age = currentYear - birthYear;
document.write("<h1>Age Calculator</h1> <br/>");
document.write(`Current Year: ${currentYear} <br/>`);
document.write(`Birth Year: ${birthYear} <br/>`);
document.write(`Your Age is: ${age} <br/><br/>`);

// Q12
var circleOfRadius = 20;
var circumferenceOfCircle = 2 * 3.142 * circleOfRadius;
var areaOfCircle = 3.142 * circleOfRadius * circleOfRadius;
document.write("<h1>The Geometrizer</h1><br/>");
document.write(`Radius of a circle is: ${circleOfRadius} <br/>`);
document.write(`The circumference is: ${circumferenceOfCircle} <br/>`);
document.write(`The area is: ${areaOfCircle} <br/><br/>`);

//Q13
var favoriteSnack = "Sooper";
var currentAge = 26;
var maxAge = 55;
var amountPerDay = 3;
var totalEatOfLife = (maxAge - currentAge) * amountPerDay;
document.write("<h1>The Lifetime Supply Calculator</h1><br/>")
document.write(`Favorite Snack: ${favoriteSnack} <br/>`);
document.write(`Current Age: ${currentAge} <br/>`);
document.write(`Estimated Maximum Age: ${maxAge} <br/>`);
document.write(`Amount of snacks per day: ${amountPerDay} <br/>`);
document.write(`You will need ${totalEatOfLife} ${favoriteSnack} to last you until the ripe old age of ${maxAge} <br/> <br/>`);