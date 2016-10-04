/*
	Joe Militello
	10/4/16
	This logs my temperature as well onto Phant
*/
//#!/usr/bin/env node
// Reads the tmp101 temperature sensor.

//Set up i2c and phant
var fs      = require('fs');
var request = require('request');
var util    = require('util');
var b = require('bonescript');
var i2c = require('i2c');
var i2c2 = require('i2c');


//Set up temp sensors
var wire1 = new i2c(0x48,{
	device: '/dev/i2c-2'
});

//Set up I2C
var wire2 = new i2c2(0x49,{
	device: '/dev/i2c-2'
});

//Use the keys 
var filename = "/root/phant/keys_tmp101.json";

var bus = 2;
var time = 1000;    // Time between readings


var keys = JSON.parse(fs.readFileSync(filename));
console.log("Title: " + keys.title);
console.log(util.inspect(keys));

var urlBase = keys.inputUrl + "/?private_key=" + keys.privateKey 
                + "&temp0=%s&temp1=%s&temp2=%s";



//Set up temperature variables
var t1;
var t2;



//Read temperature on sensor 2
    var res1=0x00;
	wire1.readByte(function(err,res1){
	if(err){

	}else{
		var temp =res1;
		t1=temp;
		 console.log("temp: %dC, %dF (0x%s)", temp, temp*9/5+32,temp*9/5+32);//,
	//	console.log(aTemp2+"F");
	}
	});
	

//Read temperature on sensor 2	
	var res2=0x00;
	wire2.readByte(function(err2,res2){
	if(err2){
		//temp2=-1;
	}else{
		var temp2 =res2;
		t2 = temp2
		console.log("temp: %dC, %dF (0x%s)", temp2, temp2*9/5+32,temp2*9/5+32);
		
		var url = util.format(urlBase,t1, t2);
		console.log("url: ", url);

		// Send to phant
		request(url, function (err, res, body) {
    	if (!err && res.statusCode == 200) {
        	console.log(body); 
    	} else {
        	console.log("error=" + err + " response=" + JSON.stringify(res));
    	}
		});

	}
	});


console.log("temp: %dC, %dF (0x%s)", 0, 0,0) 
