#!bin/bash
# Joseph Militello


#9/16/16
#used to run the TEMP101 sensors

echo "Running Temp program"



#set up i2c low and highs

i2cset -y 2 0x48 02 0x15
i2cset -y 2 0x49 02 0x15
i2cset -y 2 0x48 03 0x1a
i2cset -y 2 0x49 03 0x1a

#set up variables
TEMP1=$(i2cget -y 2 0x48 0x00)
TEMP2=$(i2cget -y 2 0x49 0x00)
TEMP1A=$(((TEMP1*9)/5+32))F
TEMP2A=$(((TEMP2*9)/5+32))F

#print out temperature
echo "Printing Temperature"
echo $TEMP1A
echo $TEMP2A

#set up for alarm
i2cset -y 2 0x48 01 0x81
i2cset -y 2 0x49 01 0x81

HOLDER=$(i2cget -y 2 0x48 0x00)
HOLDER2=$(i2cget -y 2 0x49 0x00)

echo "Running AlertTemp.js"

#running other program
node AlertTemp.js
