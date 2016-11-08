//Joseph Militello
//9/9/16
//Simple button and blink program


//#!/usr/bin/env node

//Import Bonescript
var b = require('bonescript');
	
var exec = require('child_process').exec;


//Declare button pins
var button = 'P9_28';


//Declare LED pins
var LED = 'P9_27';


//Declare LED's to low
var state = b.LOW;


//Set the LED's to an output
b.pinMode(LED,b.OUTPUT);
//picture();

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



//320 240

function buttonAdd(){
	var facePicX = $(window).width()/2;
	//var facePicY = $(window).height();
	var x = facePicX-50;
	var y =210;
	console.log(x.toString()+"px");
	$('.location').append('<IMG  class="funFace" SRC="mustache.png" WIDTH=100 HEIGHT=100>');
	$('.funFace').css("left",x.toString()+"px");
	$('.funFace').css("top",y.toString()+"px");
}

function buttonHat(){
	var facePicX = $(window).width()/2;
	//var facePicY = $(window).height();
	var x = facePicX-75;
	var y =110;
	console.log(x.toString()+"px");
	$('.location').append('<IMG  class="funFace2" SRC="hat.png" WIDTH=150 HEIGHT=100>');
	$('.funFace2').css("left",x.toString()+"px");
	$('.funFace2').css("top",y.toString()+"px");
}

function buttonSunglasses(){
	var facePicX = $(window).width()/2;
	//var facePicY = $(window).height();
	var x = facePicX-75;
	var y =200;
	console.log(x.toString()+"px");
	$('.location').append('<IMG  class="funFace3" SRC="sunglasses.png" WIDTH=150 HEIGHT=50>');
	$('.funFace3').css("left",x.toString()+"px");
	$('.funFace3').css("top",y.toString()+"px");
}

// function picture(){
// 	var y=200;
// 	$('.picture').css("top", y.toString()+"px");
// }


function hello(){
	console.log('Hello World');
}



