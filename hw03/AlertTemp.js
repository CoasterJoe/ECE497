//Joseph Militello

//9/15/16

//Temp Alert

//Import Bonescript

var b = require('bonescript');


var alert = 'P9_11';
var alert2 = 'P9_12';

var led1 = 'P9_13';
var led2 = 'P9_15';


var state= b.HIGH;
var state2=b.HIGH;
var start = 0;

b.pinMode(led1, b.OUTPUT);
b.pinMode(led2, b.OUTPUT);
b.pinMode(alert, b.INPUT, 7);
b.pinMode(alert2, b.INPUT,7);
b.attachInterrupt(alert, true, b.CHANGE, turnOn);
b.attachInterrupt(alert2, true, b.CHANGE, turnOn2);


console.log("Waiting for Alert");
start = 1;


function turnOn(){
	console.log("Alert!");
	if(start===0){
		return; 
	}
	state =b.HIGH;
	b.digitalWrite(led1, state);
}

function turnOn2(){
	console.log("Alert2!");
	if(start===0){
		return;
	}
	state2= b.HIGH;
	b.digitalWrite(led2, state2);
}
