/*Joe Militello
10/25/16
Edited For Turning on and OFF
 */
				  
#include <stdint.h>
#include <pru_cfg.h>
// #include <pru_ctrl.h>
#include "resource_table_pru1.h"

#define	INS_PER_US 200           // 5ns per instruction
#define INS_PER_DELAY_LOOP 2	 // two instructions per delay loop
// set up a 50ms delay
#define TIME 50 * 1000 * (INS_PER_US / INS_PER_DELAY_LOOP)

// The function is defined in pru1_asm_blinky.asm in same dir
// We just need to add a declaration here, the defination can be
// seperately linked
extern void start(int time);
volatile register unsigned int __R30;
volatile register unsigned int __R31;

void main(void) {
    /* Clear SYSCFG[STANDBY_INIT] to enable OCP master port */
	CT_CFG.SYSCFG_bit.STANDBY_INIT = 0;



	
	while(1==1){
		
	//while(!(__R31&(1<<3))) {
		if(!(__R31&(1<<3))){
			__R30=__R30&(0<<5);
		}else{
			__R30|= 1<<5;
		}
	
	}
	__delay_cycles(TIME);	// Give some time for press to release
	// Call assembly language
 	start(TIME);
	__halt();
}

