/**
 * Write the Prime Factorization program to store all the Prime factors 
 * of a number n into an array and finally display the output.
 * 
 * @author Abhishek Shigavan
 */

const prompt = require("prompt-sync")();
let number = prompt("Enter number to get Prime Factors : ");

let primeFactorArray = [];
let inputNumber = number;

for(let i = 2; i <= inputNumber; i++){
    if(inputNumber % i == 0){
        while(inputNumber % i == 0){
            inputNumber = inputNumber / i;
            primeFactorArray.push(i);
        }
    }
}

console.log(`Prime Factors of ${number} : ${primeFactorArray}`);