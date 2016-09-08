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

//Repeating loop of drawing and user answering inputting
  char response;
  printf("Enter 'Q' to quite anytime\n");
while(1==1){
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
  			printf("\tX");
  		}else{
  			printf("\t");
  		}
  	}
  	printf("\n");
  }

  //Player Response

  printf("Erase? (Y/N)\n");
  scanf("%s", &response);
  if(response =='Q'){
  	printf("\nEnding Program\n\n");
  	return 0;
  }
   //If yes, Erase the map
  if(response=='Y'){
  	for(drawY=0; drawY<height; drawY++){
  		for(drawX=0; drawX<width; drawX++){
  			spots[drawX][drawY]=0;
  		
  		}
  	}
  	printf("Erased Map\n");
  }

//Takes user input and moves the person up, down, or neither
  printf("Move Up 'U' or Move Down 'D' on Neither 'N'\n");
   scanf("%s", &response);
   if(response =='Q'){
  	printf("\nEnding Program\n\n");
  	return 0;
  }

  if(response=='U'){
  		yCord--;
  		if(yCord<0){
  			yCord = 0;
  		}
  }else if(response=='D'){
  		yCord++;
  		if(yCord>=height){
  			yCord = height-1;
  		}
  }


//Takes user input and moves the user left, right, or niether
  printf("Move Left'L' or Move Right 'R' on Neither 'N'\n");
   scanf("%s", &response);
   if(response =='Q'){
  	printf("\nEnding Program\n\n");
  	return 0;
  }

  if(response=='L'){
  		xCord--;
  		if(xCord<0){
  			xCord = 0;
  		}
  }else if(response=='R'){
  		xCord++;
  		if(xCord>=width){
  			xCord = width-1;
  		}
  }

  
}
 
  return 0;
}
