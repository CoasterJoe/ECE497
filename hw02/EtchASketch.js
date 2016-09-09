//Joseph Militello
//9/7/16
//This is the second itteration of the EthASketch program. This one will involve buttons.

//Beagle Bone Stuff
//#!/usr/bin/env node
var b = require('bonescript');

//Assigning pin values
var up = 'P9_42';
var down = 'P9_41';
var left = 'P9_21';
var right = 'P9_22';

b.pinMode(up,b.INPUT, 7, 'pulldown');
b.pinMode(down, b.INPUT, 7, 'pulldown');
b.pinMode(left,b.INPUT,7,'pulldown');
b.pinMode(right,b.INPUT,7,'pulldown');



//edit these variables for differnt size worlds

var width = 8;
var height = 8;
console.log('Etch-A-Sketch Program Running');
if(width<=0||height<=0){
   console.log('Error, width and heigth must be greater than zero');
   return;
}

//Initial Starting Point

var xCord =0;
var yCord =0;


//create 2d array for spots

var spots = new Array(width);
var counter=0;
for(counter=0; counter<width; counter++){
	spots[counter]=new Array(height);
}

//initialize spots
var countX=0;
var countY=0;
for(coutX=0; countX<width; countX++){
	for(countY=0; countY<height; countY++){
		spots[countX][countY]=" ";
	}
}

//initilize interrups
b.attachInterrupt(up, true, b.change, updateUp());
b.attachInterrupt(down, true,b.change, updateDown());
b.attachInterrupt(left, true, b.change, updateLeft());
b.attachInterrupt(right, true,b.change, updateRight());
//Loop forever but draw map first

drawMap();
while(1==1){

}

//Functions for updating position
function updateUp(){
	yCord=yCord-1;
	if(yCord<0){
		yCord = 0;
	}
	drawMap();	
}
function updateDown(){
	yCord = yCord+1;
	if(yCord>=height){
		yCord = height-1;
	}
	drawMap();
}
function updateLeft(){
	xCord = xCord-1;
	if(xCord<0){
		xCord= 0;
	}
	drawMap();
}
function updateRight(){
	xCord =xCord+1;
	if(xCord>=width){
		xCord = width-1;
	}
	drawMap(); 
}

//draw map function
function drawMap(){
	spots[xCord][yCord]="X";
	var drawX=0;
	var drawY=0;
	var printStringLine= "";
	for(drawX=0; drawX<width;drawX++){
		printStringLine +="\t"+drawX;
	}
	console.log(printStringLine);

	var printString="";
	//Print out vertically
	for(drawY=0; drawY<height; drawY++){
		 printString=""+drawY;
		for(drawX=0; drawX<width; drawX++){
			printString+="\t"+spots[drawX][drawY];
		}
		//printString+="|";
		console.log(printString);
	}

	//console.log(printString);
}
