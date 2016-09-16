#Joseph Militello
#9/16/16

#TMP006 Temperature Reading

TEMP=$(i2cget -y 2 0x40 01)
ATEMP=$(((TEMP*9)/5+32))F

echo "Printing Temperarture" 
echo $TEMP
echo $ATEMP
