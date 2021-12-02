// console.log("Hello World !")

// //console.log("1", userName)

// var user_Name = "Gamze"

// userName = "Ebuzer"

// console.log(userName)

// let mail = "abc@gmail.com"
// //let mail = "abcdef"

// mail = "xyz"
// console.log(mail)
// //let -> mutable

// mail = "xyz@mail.com"


// console.log(mail)

// const email = "ababab"
// //email = "xyzasd"
// //const -> immutable

// // console.log(uName)
// let uName="Afra";
// //const secondName;

// let firstUserName;
// let s1Name;

// let _name;
// let $name;

// let a = '3';
// let b = 8;
// let c = a

// a = b ;
// b = c ;

// console.log(a, b)
/* 
This is used for 
multiline comments
*/


var fName = "Afra"
fname = "Abcdcd"
let fName2 = "Muhlise"
fName2 = "Kemal"
const fName3 =  "Fatih"

// ------------------------------------ DATA TYPES -------------------------------- //

/* 
    1. string; 
    2. number; 
    3. boolean; 
    4. undefined; 
    5. null; 
*/

// let name;
// console.log("name: " + name)
// name = null; 
// console.log("name", name)



// let phoneNumber;
// console.log("phoneNumber", phoneNumber)
// let email = null;
// console.log("email", email)

// let variable = 'ali29';
// console.log(typeof variable)

// console.log(phoneNumber)
// console.log(email)

// console.log(typeof name)

// console.log("11111",typeof 29)
// console.log(typeof "125")
// console.log("2222", typeof 3.14)
// console.log(typeof "true")
// console.log(typeof true)
// console.log(typeof false)


// ------------------------------------ BASIC OPERATORS  -------------------------------- //""

// let currentYear = 2021;
// let age = currentYear - 1971;

// console.log("age: ", age)

// let a = 3;
// let b = 8;

// let total = a + b ;
// let totalValue =  5 + 8;
// console.log(total, totalValue)

// let x = 3 * 5 ;
// console.log(x)

// let y = 8 / 4;
// console.log(y)

// let exponent = 2 ** 3;
// console.log(exponent)

// let mod = 10 % 3;
// console.log(mod)


// Increment, decrement

// " -- " -> 1 azalt
// " ++ " -> 1 artır

// let ab = 3; 
// let xy = --ab;   // bu satırda ab = 2  // azalt sonra ata 
// console.log(ab, xy) // bu satırda ab = 2

// let abc = 3;
// let xyz = abc-- // bu satırda abc = 3  // ata sonra azalt
// console.log(xyz, abc)


// let dec = 5;
// let assg = ++dec;  // artır sonra ata 

// console.log(dec, assg)

// let dec2 = 5;
// let assg2 = dec2++ // ata sonra artır

// console.log(assg2, dec2)


// String Concetanation 

// const firstName = "Jeff";
// const surName = "Bezos";

// console.log(firstName + " " +surName)


// Assignment Operator 

let val = true ;

let x = 2

x = x + 5
console.log("x = " + x)

x += 5
console.log("x = " + x)

let y = 10;
y /= 2 ;
console.log("y = " + y)

y *= 4
console.log("y = " + y)

//x = x + y

x += y
console.log("x", x)

// Comparison Operators 
// <, >, >= , <= 

let ageAhmet = 50;
let ageUtku = 28;
// This gives boolean value.
console.log(ageAhmet > ageUtku)
console.log(ageAhmet < ageUtku)

console.log(ageAhmet == 50)
console.log(ageUtku != 28)

console.log("1", ageAhmet == "50") // loose comparison
console.log("2", ageAhmet === "50") // strict comparison
console.log("2", ageAhmet !== "50") 


// Template Literal 

let firstName = "Jeff"
let secondName = "Bezos"
let work = "Amazon"

let sentence = "He is " + firstName + " " + secondName + " and He is founder of " + work + ".";

console.log(sentence)

let betterSentece = `He is ${firstName} ${secondName}, and He is foumder of ${work}.`

console.log(betterSentece)


console.log("I want to write this \n\
on new line")

console.log(`I want to write this \n\
on new line`)


console.log("For github desktop.")


// ------------------------------------ CONDITIONALS -------------------------------- //

const currentAge = 19

//If the statement within the paranthesis is true, the code within the if block will execute.
if(currentAge >= 18){
    console.log("You can drive legally.")
}
else{ // if cuurentage < 18
    console.log("You are not allowed to drive.")
}

const birthYear = 2001 ;

let generation; 

    if(birthYear >=  2000) {
        generation = "Z"
        //console.log(generation)
    }else if( birthYear < 2000){
        generation = "y"
        //console.log(generation)
    }else{

    }

console.log("gen", generation)
/*
Control flow
if (){

}else{

}
*/

