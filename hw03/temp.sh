#!bin/bash
# Joseph Militello



echo "Running Temp program"

#i2cdetect -y -r 2

i2cset -y 2 0x48 02 0x19
i2cset -y 2 0x49 02 0x19
i2cset -y 2 0x48 03 0x1a
i2cset -y 2 0x49 03 0x1a

TEMP1=$(i2cget -y 2 0x48 0x00)
TEMP2=$(i2cget -y 2 0x49 0x00)
TEMP1A=$(((TEMP1*9)/5+32))
TEMP2A=$(((TEMP2*9)/5+32))


echo "Printing Temperature"
echo $TEMP1A
echo $TEMP2A

i2cset -y 2 0x48 01 0x81
i2cset -y 2 0x49 01 0x81

echo "Entering Waiting For Alarm"

node AlertTemp.js
