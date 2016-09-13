/*
*Joseph Militello
*9/5/16
*EtchASketch.c Version 1.0
This program basically creates a simple Etch-A-Sketch that the user can draw on.
*/

#include <stdio.h>

int bss_var;        /* Uninitialized global variable */
int data_var = 1;   /* Initialized global variable */
int main(int argc, char **argv)
{
  void *stack_var;            
  stack_var = (void *)main;  

//Begin Program
  printf("\nEtch-A-Sketch Program 1.0\n\n");

//Get Coordinates
  int width;
  int height;
  printf("Enter in the width:\n");
  scanf("%d", &width);
  printf("Enter in the height:\n");
  scanf("%d", &height);

if(width<=0||height<=0){
   printf("Error, width and height must be greater than zero\n");
   return 0;
}

//Initial Starting Point
int xCord = 0;
int yCord = 0;

//initial grid 
int spots[width][height];
int justCleared=1;
//Repeating loop of drawing and user answering inputting
while(1==1){
  char response;
  printf("Enter 'q' to quite anytime\n");
  //update location
  spots[xCord][yCord]=1;

  //draw map; 
  int drawX=0;
  int drawY=0;

//Draw the X corrdinate values
  for(drawX=0; drawX<width; drawX++){
  	printf("\t%d",drawX);
  }
  printf("\n");

//Draw the rest of the 
  for(drawY=0; drawY<height; drawY++){
  	printf("%d:",drawY);
  	for(drawX=0; drawX<width; drawX++){
  		if(spots[drawX][drawY]==1){
			if(justCleared==1){
				spots[drawX][drawY]=0;
				printf("\t");
			}else{
	  			printf("\tX");
			}
  		}else{
  			printf("\t");
  		}
  	}
  	printf("\n");
  }
 justCleared = 0;
  //Player Response



//Takes user input and moves the person up, down, or neither
  printf("Move Up 'u'\nMove Down 'd'\nMove Left 'l'\nMove Right 'r'\nErase 'e'\nor Quit 'q'\n");
   scanf("%s", &response);
   if(response =='q'){
  	printf("\nEnding Program\n\n");
  	return 0;
  
  }else if(response=='e'){
	for(drawY=0; drawY<height; drawY++){
  		for(drawX=0; drawX<width; drawX++){
  			spots[drawX][drawY]=0;
  		
  		}
  	}
	justCleared = 1;
  	printf("Erased Map\n");


  }else if(response=='u'){
  		yCord--;
  		if(yCord<0){
  			yCord = 0;
  		}
  }else if(response=='d'){
  		yCord++;
  		if(yCord>=height){
  			yCord = height-1;
  		}

  }else if(response=='l'){
  		xCord--;
  		if(xCord<0){
  			xCord = 0;
  		}
  }else if(response=='r'){
  		xCord++;
  		if(xCord>=width){
  			xCord = width-1;
  		}
  }

  
}
 
  return 0;
}
