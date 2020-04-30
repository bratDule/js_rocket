// Objasnjenje
var favColor = 'blue';
var myFavColor = ['blue', 'red', 'green'];
var numOfFavColors = 3;
var hasGotFavColor = true;
var dusanObject = {
	firstName: 'Dusan',
	lastName : 'Mihailovic',
	myFavColor: ['blue', 'red', 'green'],
	yearsAlive: 98,
	isMale: true
};

// Function
function whatIsMyFavColor () {

}

var whatIsMyFavColor = function () {
	return false;
	return true;
	return 'blue';
}

var doSomething = function () {
	console.log("do Something!!!");
}

var area = function (width, height) {
	return width * height;
}

var fullname = function (firstname, secondname) {
	return firstname + ' ' + secondname;
}

// if statment
if (true){
	alert('male');
};

if ('male' == 'male'){
	alert ('male');
}

var number1 = 10;
var number2 = 100;

if (number1 > number2) {
	alert ('Zaista!');
}	else {
	alert ('Paznja! Pricate gluposti');
}

var name1 = 'Dule';
var name2 = 'Marko';

if (name1 == 'Dule') {
	alert('true 1');
} else if (name2 == 'Dule') {
	alert ('true 2');
} else {
	alert ('false');
}