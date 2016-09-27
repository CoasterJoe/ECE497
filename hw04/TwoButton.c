/*
Joseph Militello
9/26/16
This program makes two led's blink with two buttons using the mmap
*/
#include <stdio.h>
#include <stdlib.h>
#include <sys/mman.h>
#include <sys/stat.h>
#include <fcntl.h> 
#include <signal.h>    // Defines signal-handling functions (i.e. trap Ctrl-C)
#include "beaglebone_gpio.h"



//End the signal
int runLights = 1;    // Set to 0 when ctrl-c is pressed

/****************************************************************
 * signal_handler
 ****************************************************************/
void signal_handler(int sig);
// Callback called when SIGINT is sent to the process (Ctrl-C)
void signal_handler(int sig)
{
	printf( "\nExiting Program\n" );
	runLights = 0;
	
}

int main(int argc, char *argv[]) {
    
    //mmap variables
    volatile void *gpio_addr1;
    volatile unsigned int *gpio_oe_addr1;
    volatile unsigned int *gpio_setdataout_addr1;
    volatile unsigned int *gpio_cleardataout_addr1;
    volatile unsigned int *gpio_datain1;
    unsigned int reg1;
    
    //mmap port 2 variables
    volatile void *gpio_addr2;
    volatile unsigned int *gpio_oe_addr2;
    volatile unsigned int *gpio_setdataout_addr2;
    volatile unsigned int *gpio_cleardataout_addr2;
    volatile unsigned int *gpio_datain2;
    unsigned int reg2;
  
    //Set up signal for CTRL-C
	signal(SIGINT, signal_handler);

    int fd = open("/dev/mem", O_RDWR);


//Do both mmap calls
    gpio_addr1 = mmap(0, GPIO1_SIZE, PROT_READ | PROT_WRITE, MAP_SHARED, fd, GPIO1_START_ADDR);
    gpio_addr2 = mmap(0, GPIO2_SIZE, PROT_READ | PROT_WRITE, MAP_SHARED, fd, GPIO2_START_ADDR);

    //Get approrpiate variables
    gpio_oe_addr1           = gpio_addr1 + GPIO_OE;
    gpio_setdataout_addr1   = gpio_addr1 + GPIO_SETDATAOUT;
    gpio_cleardataout_addr1 = gpio_addr1 + GPIO_CLEARDATAOUT;
    gpio_datain1            = gpio_addr1 + GPIO_DATAIN;

    gpio_oe_addr2           = gpio_addr2 + GPIO_OE;
    gpio_setdataout_addr2   = gpio_addr2 + GPIO_SETDATAOUT;
    gpio_cleardataout_addr2 = gpio_addr2 + GPIO_CLEARDATAOUT;
    gpio_datain2            = gpio_addr2 + GPIO_DATAIN;
    
    
    //Exit if not working
    if(gpio_addr1 == MAP_FAILED||gpio_addr2== MAP_FAILED) {
        printf("Unable to map GPIO\n");
        exit(1);
    }

    //Set up output pins
    reg1= *gpio_oe_addr1;
    reg2= *gpio_oe_addr2;
    reg1 &= ~USR0;       
    reg1 &= ~USR1; 
    *gpio_oe_addr1 = reg1;
    *gpio_oe_addr2 = reg2;
     
    printf("LED's are ready\n");
    
    
    //Turn on light when it is pressed
    while(runLights) {
     
        if(*gpio_datain1 & GPIO1_18) {
            *gpio_setdataout_addr1=USR1;
    	} else {
            *gpio_cleardataout_addr1=USR1;
    	}
    	if(*gpio_datain2 & GPIO2_1) {
            *gpio_setdataout_addr1=USR0;
    	} else {
            *gpio_cleardataout_addr1=USR0;
    	}
   
    }

    munmap((void *)gpio_addr1, GPIO1_SIZE);
    munmap((void *)gpio_addr2, GPIO2_SIZE);
    close(fd);
    return 0;
}
