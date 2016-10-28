//Joseph Militello
//9/9/16
//Simple button and blink program


//#!/usr/bin/env node

//Import Bonescript
var b = require('bonescript');
	



//Declare button pins
var button = 'P9_28';


//Declare LED pins
var LED = 'P9_27';


//Declare LED's to low
var state = b.LOW;


//Set the LED's to an output
b.pinMode(LED,b.OUTPUT);


//Sets buttons to an input
b.pinMode(button, b.INPUT, 7, 'pulldown');


//Set up interrupts to blink a different LED
b.attachInterrupt(button, true, b.CHANGE, printStatus);



//initial print
console.log('LED button program ready');


//Blinks LED1
function printStatus(){
	console.log('BLINK');
	b.digitalWrite(LED,state);
	if(state===b.HIGH){
		state = b.LOW;
	}else{
		state = b.HIGH;
	}
}



function hello(){
	console.log('Hello World');
}



