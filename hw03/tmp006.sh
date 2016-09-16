#Joseph Militello
#9/16/16

#TMP006 Temperature Reading

echo "Printing Temperature"

a=0
#loop through and continously print temperature
while [ $a -lt 10 ]
do
	TEMP=$(i2cget -y 2 0x40 01)
	ATEMP=$(((TEMP*9)/5+32))F
	echo $ATEMP
done

