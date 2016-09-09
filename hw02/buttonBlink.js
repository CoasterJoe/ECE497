//Joseph Militello
//9/9/16
//Simple button and blink program


//#!/usr/bin/env node

//Import Bonescript
var b = require('bonescript');

//Declare button pins
var button = 'P9_42';
var button2 = 'P9_41';
var button3 = 'P9_18';
var button4 = 'P9_17';

//Declare LED pins
var LED = 'P9_14';
var LED2 = 'P9_13';
var LED3 = 'P9_15';
var LED4 = 'P9_16';

//Declare LED's to low
var state = b.LOW;
var state2 = b.LOW;
var state3 = b.LOW;
var state4 = b.LOW;

//Set the LED's to an output
b.pinMode(LED,b.OUTPUT);
b.pinMode(LED2,b.OUTPUT);
b.pinMode(LED3,b.OUTPUT);
b.pinMode(LED4,b.OUTPUT);

//Sets buttons to an input
b.pinMode(button, b.INPUT, 7, 'pulldown');
b.pinMode(button2, b.INPUT, 7, 'pulldown');
b.pinMode(button3, b.INPUT, 7, 'pulldown');
b.pinMode(button4, b.INPUT, 7, 'pulldown');

//Set up interrupts to blink a different LED
b.attachInterrupt(button, true, b.CHANGE, printStatus);
b.attachInterrupt(button2, true, b.CHANGE, printStatus2);
b.attachInterrupt(button3, true, b.CHANGE, printStatus3);
b.attachInterrupt(button4, true, b.CHANGE, printStatus4);


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

//Blinks LED2
function printStatus2(){
	console.log('BLINK2');
	b.digitalWrite(LED2, state2);
	if(state2===b.HIGH){
		state2=b.LOW;
	}else{
		state2= b.HIGH;
	}
}

//Blinks LED3
function printStatus3(){
	console.log('BLINK3');
	b.digitalWrite(LED3, state3);
	if(state3===b.HIGH){
		state3=b.LOW;
	}else{
		state3=b.HIGH;
	}
}

//Blinks LED4
function printStatus4(){
	console.log('BLINK4');
	b.digitalWrite(LED4, state4);
	if(state4===b.HIGH){
		state4=b.LOW;
	}else{
		state4=b.HIGH;
	}
}

