/**
 * Write a program in the following steps
 *  a) Roll a die and find the number between 1 to 6
 *  b) Repeat the die roll and find the result each time
 *  c) store the result in dictonary
 *  d) Repeat till any one of the number has reached 10 times
 *  e) Find the number that has reached maximum times and the one that was for minimum time
 * 
 * @author Abhishek Shigavan
 */

let flag = 0;
let counterOf1 = 0, counterOf2 = 0, counterOf3 = 0, counterOf4 = 0, counterOf5 = 0, counterOf6 = 0;
let diceMap = new Map();
diceMap.set(1, counterOf1);
diceMap.set(2, counterOf2);
diceMap.set(3, counterOf3);
diceMap.set(4, counterOf4);
diceMap.set(5, counterOf5);
diceMap.set(6, counterOf6);
 
while(true){
    let randomDiceNumber = ((Math.floor(Math.random() * 10)) % 6) + 1;
     
    if(randomDiceNumber == 1){
        counterOf1++;
        diceMap.set(randomDiceNumber, counterOf1);
    }
    else if(randomDiceNumber == 2){
        counterOf2++;
        diceMap.set(randomDiceNumber, counterOf2);
    }
    else if(randomDiceNumber == 3){
        counterOf3++;
        diceMap.set(randomDiceNumber, counterOf3);
    }
    else if(randomDiceNumber == 4){
        counterOf4++;
        diceMap.set(randomDiceNumber, counterOf4);
    }
    else if(randomDiceNumber == 5){
        counterOf5++;
        diceMap.set(randomDiceNumber, counterOf5);
    }
    else if(randomDiceNumber == 6){
        counterOf6++;
        diceMap.set(randomDiceNumber, counterOf6);
    }
 
    if(counterOf1 == 10)
        break;
    else if(counterOf2 == 10)
        break;    
    else if(counterOf3 == 10)
        break;
    else if(counterOf4 == 10)
        break;
    else if(counterOf5 == 10)
        break;
    else if(counterOf6 == 10)
        break;            
}
 
let counter = 0;
let maxValueOfKey = 0;
let keyOfMaxValue = 0;
let minValueOfKey = 0;
let keyOfMinValue = 0;
let valueOfKey = 0;
for(let key of diceMap.keys()){
    valueOfKey  = diceMap.get(key);
    if(counter == 0){
        maxValueOfKey = valueOfKey;
        keyOfMaxValue = key;
        minValueOfKey = valueOfKey;
        keyOfMinValue = key;
    }
    else{
        if(valueOfKey >= maxValueOfKey){
            maxValueOfKey = valueOfKey;
            keyOfMaxValue = key;
        }
        else if(valueOfKey <= minValueOfKey){
            minValueOfKey = valueOfKey;
            keyOfMinValue = key;
        }
    }
    counter++;
}
 
console.log(`Dice Simulation Result : `);
for(let [key, value] of diceMap)
    console.log(`Dice Number : ${key} || Occurence : ${value}`);
 
console.log(`${keyOfMaxValue} comes maximum time : ${maxValueOfKey} times`);
console.log(`${keyOfMinValue} comes minimum time : ${minValueOfKey} times`);