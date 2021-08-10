/**
 * Write a program in the following steps :
 *  a) Generates 10 random 3 digit numbers 
 *  b) store these random numbers into a array
 *  c) Sort the array then find the 2nd largest and 2nd smallest element
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

console.log("Array Before Sorting : ");
displayNumberArray();

let size = numberArray.length;
for(let pass = 1; pass <= size; pass++){
    let flag = 0;
    for(let i = 0; i <= (size - 2); i++){
        if(numberArray[i] > numberArray[i+1]){
            let maxNumber = numberArray[i];
            let minNumber = numberArray[i+1];
            numberArray[i] = minNumber;
            numberArray[i+1] = maxNumber
            flag = 1;
        }
    }

    if(flag == 0){
        console.log("Array is sorted...!!!");
        break;
    }
}

console.log("Array After Sorting : ");
displayNumberArray();

let secondLastNo = numberArray[size-2];
let secondNo = numberArray[1];
console.log(`2nd Largest Number : ${secondLastNo}\nSmallest Number : ${secondNo}`);