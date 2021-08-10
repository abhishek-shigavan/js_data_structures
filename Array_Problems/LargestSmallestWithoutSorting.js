/**
 * Write a program in the following steps :
 *  a) Generates 10 random 3 digit numbers 
 *  b) store these random numbers into a array
 *  c) Then find the 2nd largest and 2nd smallest element without sorting the array
 * 
 * @author Abhishek Shigavan
 */

let numberArray = [];

for(let i = 0; i < 10; i++){
    let number = (Math.floor(Math.random() * 900)) + 100;
    numberArray[i] = number;
}

let displayNumberArray = function(){
    console.log("Numbers In Array : ");
    let counter = 1;
    for(let no of numberArray){
        console.log(`${counter} : ${no}`);
        counter++;
    }
}

let largestNumber = 0;
let smallestNumber = 0;
let counter = 0;

for(let number of numberArray){
    if(counter == 0){
        largestNumber = number;
        smallestNumber = number;
    }
    else if(number >= largestNumber){
        largestNumber = number;
    }    
    else if(number <= smallestNumber){
        smallestNumber = number;
    }
    counter++;        
}

displayNumberArray();
console.log(`Largest Number : ${largestNumber}\nSmallest Number : ${smallestNumber}`);