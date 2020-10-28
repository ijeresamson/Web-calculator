//var grade = 50;
//function studentscore(score) {
//   if  (score >= grade){
//       grade -= grade;
//       console.log("Excellent result " + "A")
//   } else {
//       console.log("Fall "+"F")
//   }
//}
//
//
//studentscore(49);

//var grade = 100;
// function peoplescore(score) {
//    if (score >= 79)
//        {
//        console.log("Excellent result "+"A" )
//    } else if (score >= 55){
//        console.log("Pass "+"C")
//    } else if (score >= 45){
//        console.log("weak pass "+"D")
//    } else if (score >= 10){
//        console.log("Fall "+ "F")
//    } else if (score >= 1){
//        console.log("No result")
//    }
// }
// 
//peoplescore(56);
//peoplescore(47);
//peoplescore(21);
//peoplescore(80);
//peoplescore(7);

// function num(dog,monkey){
//     return dog + monkey;
//     return goat * cat;
// }
//
// box = []
//box.push(10,30);
//box.push(50,20);
//box.push(101,50);
//    console.log(box);
//

//var information = new Object();
//    information.firstname = "samson";
//    information.usernamen = "fair lord";
//    information.age = 20;
//
//

//var studentname1 = new Object();
//studentname1.firstname = "ijere";
//studentname1.secondname = "ifeanyi";
//studentname1.age = 20;
//
//allinformation = []
//allinformation.push(information);
//allinformation.push(studentname1);
//
//console.log(allinformation);
//
//

//var namestudents = {
//    firstname: "ifeanyi",
//    sencodname: "samson",
//    age: 20,
//    greeting: function() {
//        return "Hello, my name is " + this.firstname + " and i am " + "years old";
//    }
//};
//console.log(namestudents.greeting());
//


//var student = []
//
//function studentname(first,last,age){
//    this.firstname = first;
//    this.secondname = last;
//    this.age = age;
//    this.greeting = function() {
//         return "Hello, my name is " + this.firstname + " and i am " + this.age + "years old";
//    }


// var things = new studentname("ijere","samson",20);
//console.log(things);
//console.log(things.greeting());
//
//var boys = new studentname("Amu","Joy",23);
//console.log(boys);
    //console.log(boys.greeting());


//function animals(name,age){
//this.name = name;
//this.age = age;
//this.greeting = function(){
//	return this.name + " that my name " + " and am " + age + " years old and i kill "
//	}
//this.good = function(){
//	return this.name + " that my name "  + " and am " + age + " years old and i feed on grass "
//}
//};
//var badthing = new animals("lion",30);
//console.log(badthing);
//console.log(badthing.greeting());
//var goodthing = new animals("goat",15);
//console.log(goodthing);
//console.log(goodthing.good());
//

/* addition */

var firstinput = document.getElementById('firstinput');
var secondinput = document.getElementById('secondinput');  	
var mainresult = document.getElementById('mainresult');
var form = document.getElementById('percentage');

form.addEventListener('submit' , function() {
	if (!firstinput.value || !secondinput.value){
		alert("please enter a value in the fields")
	}else{
		var y =  parseFloat(firstinput.value);
		var x = parseFloat(secondinput.value);
		
		alert( y + x);
	}
	});

	/* end of addition */

	/* subtraction */
var subinput = document.getElementById('subinput'); 
var secondsub = document.getElementById('secondsub');
var form = document.getElementById('subtraction');

form.addEventListener('submit' , function() {
	if (!subinput.value || !secondsub.value){
		alert("please enter a values in the fields")
	}else{
		var y =  parseFloat(subinput.value);
		var x = parseFloat(secondsub.value);
		
		alert( y - x);
	}
	});
	
		/* end of subtraction */

	/* multiplication */
var multip1 = document.getElementById('multitext');
var multip2 = document.getElementById('submulti');
var form = document.getElementById('multiplication');

form.addEventListener('submit' , function() {
	if (!multitext.value || !submulti.value){
		alert("please enter a values in the fields")
	}else{
		var w =  parseFloat(multitext.value);
		var s = parseFloat(submulti.value);
		
		
		alert( w * s);
		
	}
	});
	 	/* end of multiplication */
		
 /* Division */
var division1 = document.getElementById('divinput');
var division2 = document.getElementById('divtext');
var result = document.getElementById('mainresult')
var form = document.getElementById('division');

form.addEventListener('submit' , function(div) {
	if (!divinput.value || !divtext.value){
		alert("please enter a values in the fields")
	}else{
		var o =  parseFloat(divinput.value);
		var p = parseFloat(divtext.value);
		
		alert( o / p);
		var me = (o % p);
		var us = me * 100
		alert( " a remainder Calculators " + me);
		mainresult.innerText = "Answer " + us + "%";
		div.preventDefault();
		
	}
	});




























