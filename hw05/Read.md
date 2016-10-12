joeMakeFile.make is the makefile I am submitting. This is the makefile that I have worked on.

The tmp101.js is the program that sends data to the phant. 

I sucessfully completed the kernal and the cross compile. My cross compile data is below.
From Host
Hello, World! Main is executing at 0x400512 
This address (0x7fff79f6c858) is in our stack frame 
This address (0x601058) is in our bss section 
This address (0x601040) is in our data section 
joseph@joseph-ThinkPad-W530:~/exercises$ 


From bone
Hello, World! Main is executing at 0x83f5 
This address (0xbe91cc94) is in our stack frame 
This address (0x11030) is in our bss section 
This address (0x11028) is in our data section 
joseph@joseph-ThinkPad-W530:~/exercises$ 

running it on bone completely
Hello, World! Main is executing at 0x83f5 
This address (0xbee45bf4) is in our stack frame 
This address (0x11030) is in our bss section 
This address (0x11028) is in our data section
root@beaglebone:~# 


==========
Prof. Yoder's comments
Looks good.  Did you get the kernel compiled and running?

Grade:  9/10
