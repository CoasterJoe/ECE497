//Joseph Militello

//9/16/16

//Temp Alert

//Import Bonescript

var b = require('bonescript');
var i2c = require('i2c');
var i2c2 = require('i2c');
var wire1 = new i2c(0x48,{
	device: '/dev/i2c-2'
});

//Set up I2C
var wire2 = new i2c2(0x49,{
	device: '/dev/i2c-2'
});


//Set up outputs
var alert = 'P9_11';
var alert2 = 'P9_12';

var led1 = 'P9_13';
var led2 = 'P9_15';

//set Up LEDs
var state= b.HIGH;
var state2=b.HIGH;
var start = 0;


//Set up Pinmodes
b.pinMode(led1, b.OUTPUT);
b.pinMode(led2, b.OUTPUT);
b.pinMode(alert, b.INPUT, 7);
b.pinMode(alert2, b.INPUT,7);
b.attachInterrupt(alert, true, b.CHANGE, turnOn);
b.attachInterrupt(alert2, true, b.CHANGE, turnOn2);

//Waiting For User Alert
console.log("Waiting for Alert");
start = 1;



//Two methods to light up LED and print out temperature for each temperature sensor.
function turnOn(){
	console.log("Alert!");
	if(start===0){
		return; 
	}
	state =b.HIGH;
	b.digitalWrite(led1, state);
	var res = 0x00;
	wire1.readByte(function(err,res){
	if(err){

	}else{
		var aTemp = res*9/5+32
		console.log(aTemp+"F");
	}
	});

}

function turnOn2(){
	console.log("Alert2!");
	if(start===0){
		return;
	}
	state2= b.HIGH;
	b.digitalWrite(led2, state2);
 	var res2=0x00
	wire2.readByte(function(err,res2){
	if(err){

	}else{
		var aTemp2 = res2*9/5+32
		console.log(aTemp2+"F");
	}
	});

}

