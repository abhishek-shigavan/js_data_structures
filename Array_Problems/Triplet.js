/**
 * Write a program to show sum of 3 integers add to zero
 * 
 * @author Abhishek Shigavan
 */

let numberArray = [9, -4, 2, 6, -7, 8, -5, 1, -3, 12];

let size = numberArray.length;
let counter = 1;
for(let i = 0; i < size; i++){
    let firstNumber = numberArray[i];
    for(let j = i+1; j < size; j++){
        let secondNumber = numberArray[j];
        for(let k = j+1; k < size; k++){
            let thirdNumber = numberArray[k];
            let additionResult = firstNumber + secondNumber + thirdNumber;
            if(additionResult == 0){
                console.log(`Triplet ${counter}: ${firstNumber} ${secondNumber} ${thirdNumber}`);
                console.log(`Addition of ${firstNumber} ${secondNumber} ${thirdNumber} : ${additionResult}`);
                counter++;
            }
        }
    }
}