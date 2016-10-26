Homework 7 Readme

First off, Tim and I edited our wiki page for our project. http://elinux.org/ECE_497_Project_-_Fun_Face_Cam

Second, here are the results of the GPIO speed tests:
  
   My overall tests seem to show the following. The JavaScript is the slowest, the Kernel is the third fastest, Mmaping is the second fastest, and the PRU is the fastest.
   
   The Java Script was easy to write, but it is the slowest during runtime. For JavaScript, it seemed to also be the system that used the most resources on the processor using almost 98% of the processor. On average, it took around 14 milliseconds for the singal to respond, with a maximum of 20 milliseconds and a minimum of 10 milliseconds. 
   
   The Kernel maping was more difficult to write, however it seems quite handy. If a user needs a certain pin to only have one quick application, the Kernel method seems like a great way to implement this. Furthermore I thought this would be faster than Mmaping, but it did not appear so. It did use less resources that the Mmaping. It seem to use a mirror 89% of the processor. On average, it seemed to take 75 nano seconds with a maximum of 100 nano seconds and minimum of 50 nano seconds. 

  The Mmaping was faster than the Kernel. It had an average time 38 nano seconds with a maximum of 50 nano seconds and a minimum of 35 nano seconds. It seem to use 97% of the processor power.
  
  Finally, I used PRU. PRU was by far the fastest. On average, it would only respong in 3.8 nano seconds. With a maximum of 4 nano seconds and a minimum of 3.6 nano seconds. It also used very little of the processor. This method clearly was by far the fastests.
  
