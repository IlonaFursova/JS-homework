//1 задание
let name = prompt('Enter your name');
alert('Hi, '+ name);

//2 задание
let dateOfBday = prompt('Enter your year of birthday');
const currentYear = 2020;
let birthday = currentYear - dateOfBday;
alert('Your age is ' + birthday);

//3 задание
let lengthOfSquare = prompt('Enter side length of a square,pls');
a = lengthOfSquare;
let perimeter = 4*a;
alert('Square perimeter is ' + perimeter);


//4 задание
let circleRadius = prompt('Enter circle radius');
const pi = 3.141592653589793;
let r = circleRadius;
let areaOfCircle = pi * r **2;
alert('Your area of a circle is ' + areaOfCircle);

//5 задание
let distance = prompt('Indicate the distance in km between two cities');
let hoursToCity = prompt('How many hours do you want to get into town?');
let speed = distance / hoursToCity;
alert('Your speed to the city is '+ speed);

//6 задание
let dollars = prompt('Enter dollars');
const dollarsToEuro = .92;
let euro = dollars * dollarsToEuro;
alert(euro);


//7 задание
let amountOfFlesh = prompt('Enter the amount of flash drive in GB');
let GbOfFlesh = amountOfFlesh * 1024;
let sizeFile = GbOfFlesh / 820;
alert(Math.floor(sizeFile) + ' files fit on a flash drive');


//8 задание
let moneyWallet = prompt('Enter amount of money in the wallet');
let moneyChocolate = prompt('Enter the price of one chocolate bar');
let amountOfChocolate = Math.floor(moneyWallet / moneyChocolate);
let prizeForChocolates = amountOfChocolate * moneyChocolate;
let surrender = moneyWallet - prizeForChocolates;
alert('Amount of Chocolate is ' + amountOfChocolate + ' and your surrender is ' + surrender);


//9 задание 
let threeNumber = prompt('Enter three-digit number', 100);
if (threeNumber < 100) {
  alert ('It is too little!');
}
else if (threeNumber > 999) {
  alert('It is so too much!');
}
else {
  let n1 = threeNumber % 10;
  let n2 = (threeNumber - n1) / 10;
  let op2 = n2 % 10;
  let n3 = (n2 - op2) / 10;
  let op3 = n3 % 10;
  alert('Your number is ' + n1 + op2 + op3);
}
