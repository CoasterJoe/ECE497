Joseph Militello
My homework 4 subbmission

gpioToggle.c - This is my eddited gpioToggle.c program so now the led turns on when a button is pressed

TwoButton.c - This has two buttons that control two LED's

beaglebone_gpio.h - I edited this file and added more GPIO ports

matrixLED.css - I edited this to add yellow and red squares
matrixLED.html - I edited this to include my name
matrixLED.js - I edited this to add the yellow and red squares.

Question Answers
1. The basic action between the boneServer.js is to connect the bone with the HTML file. It also serves to set up the port that the device listens to. The boneServer.js behaves like a mediator. It passes data between the two. When the boneServer.js calls "matrix" on the bone, it starts commands to start the oscillator, blink the display, and make the LEDMatrix the full brightness.
2. When an LED is clicked in the HTML file, it calls the function 'updateFromLED()'. This calls the updateFromLED() function from the matrixLED.js. This in turns calls the socket.on('matrix.old', function (i2cNum)) This reads the values on the led matrix. It then compares the two data files and update the led matrix to make sure it matches.
3. The .on is used to color the LED. The boarder will become green #00ee00; The background-color is then set to green. In .LED, the  colors and borders are set to white.
4. To control the leds, I just have to edit what happens when the html detects a click. Basically, I will update whenever an LED detects a click. When the led clicks, I will read if it is green, yellow, or red. If it is green, I will make it yellow. If it is yellow, I will make it red. If it is red, I will make it blank. The messages will be the same as before. The HTML file will trigger a call on the bone. The bone will calll the boneServer.js and it will read all of the ports. It will find which ones are on and what state they are in. Using this, I can determine the color and edit it appropriatly. The only thing I will have to do is edit the matrixLED.css. I will have to make the functions, .onYellow and .onRed.


