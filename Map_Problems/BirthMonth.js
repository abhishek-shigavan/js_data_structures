/**
 * Write a program to generate a birth month of 50 individuals between the year 92 & 93. 
 * Find all the individuals having birthday in the same month. Store it to finally print.
 * 
 * @author Abhishek Shigavan
 */

let birthMonthMap = new Map();
birthMonthMap.set("January", []);
birthMonthMap.set("February", []);
birthMonthMap.set("March", []);
birthMonthMap.set("April", []);
birthMonthMap.set("May", []);
birthMonthMap.set("June", []);
birthMonthMap.set("July", []);
birthMonthMap.set("August", []);
birthMonthMap.set("September", []);
birthMonthMap.set("October", []);
birthMonthMap.set("November", []);
birthMonthMap.set("December", []);
 
for(let rollNo = 1; rollNo <= 50; rollNo++){
    let birthMonth = ((Math.floor(Math.random() * 100)) % 24) + 1;
 
    if(birthMonth == 1 || birthMonth == 13){
        let janRollNo = birthMonthMap.get("January");
        janRollNo.push(rollNo);
    }
    else if(birthMonth == 2 || birthMonth == 14){
        let febRollNo = birthMonthMap.get("February");
        febRollNo.push(rollNo);
    }
    else if(birthMonth == 3 || birthMonth == 15){
        let marRollNo = birthMonthMap.get("March");
        marRollNo.push(rollNo);
    }
    else if(birthMonth == 4 || birthMonth == 16){
        let aprRollNo = birthMonthMap.get("April");
        aprRollNo.push(rollNo);
    }
    else if(birthMonth == 5 || birthMonth == 17){
        let mayRollNo = birthMonthMap.get("May");
        mayRollNo.push(rollNo);
    }
    else if(birthMonth == 6 || birthMonth == 18){
        let junRollNo = birthMonthMap.get("June");
        junRollNo.push(rollNo);
    }
    else if(birthMonth == 7 || birthMonth == 19){
        let julRollNo = birthMonthMap.get("July");
        julRollNo.push(rollNo);
    }
    else if(birthMonth == 8 || birthMonth == 20){
        let augRollNo = birthMonthMap.get("August");
        augRollNo.push(rollNo);
    }
    else if(birthMonth == 9 || birthMonth == 21){
        let sepRollNo = birthMonthMap.get("September");
        sepRollNo.push(rollNo);
    }
    else if(birthMonth == 10 || birthMonth == 22){
        let octRollNo = birthMonthMap.get("October");
        octRollNo.push(rollNo);
    }
    else if(birthMonth == 11 || birthMonth == 23){
        let novRollNo = birthMonthMap.get("November");
        novRollNo.push(rollNo);
    }
    else if(birthMonth == 12 || birthMonth == 24){
        let decRollNo = birthMonthMap.get("December");
        decRollNo.push(rollNo);
    }
}
console.log("Month & Roll Nos Having Birthday In That Month");
console.log(birthMonthMap);
 