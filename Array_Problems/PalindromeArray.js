/**
 * Take a range from 0 - 100 , find the digits that are repeated twice like 
 * 33,77 and store them in an array.
 * 
 * @author Abhishek Shigavan
 */

let palindromeArray = [];
for(let i = 10; i <= 100; i++){
    let originalNumber = i;
    let reverseNumber = 0;

    while(originalNumber != 0){
        let remainder = originalNumber % 10;
        originalNumber = parseInt(originalNumber / 10);
        reverseNumber = (10 * reverseNumber) + remainder;
    }

    if(reverseNumber == i)
        palindromeArray.push(reverseNumber);
}

console.log(`Repeated Digits Between 0-100 : ${palindromeArray}`);