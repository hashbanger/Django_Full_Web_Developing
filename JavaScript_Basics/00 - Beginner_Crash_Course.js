// ## CRASH COURSE FOR BEGINNERS

var number  = 5 // in line comment

/* multiline
freaking
long 
comment*/

number = 9

/*Data-types:

undefined, null, boolean, string, symbol, number, and object
*/

var  myName = "Prashant"
// able to be used throughout the program

myName = 8

let ourName = 'Batman'
// only be used within the scope where declared

const pi = 3.14
// can never change

//-------------------------------------------------------

var a; // declaring a variable
var b = 2; // assigning and declaring
console.log(a) // allows thing to be seen in console

a = 7; // a is already declared
b = a; 

console.log(a) 

var a = 9; //declaring and initializing

var a;
var b;
var c;
// uninitialized

var a = 5;
var b = 6;
var c = "I am a"

a = a + 5;
a += 5; // compound addition( assignment)
b = b + 6;
b -= 6;
b *= 1;
a /= 2;  // compund division
c = c + "String"

// CASE SENSITIVITY------------------------------------------
// Declarations
var studyCapVar;
var titleCaseOver;
studycapvar = 10; 
titleCaseOVER = "Hell"
// throws error as the case matters

// ADDING SUBSTRACTING NUMBERS----------------------------------------------

var sum = 10 + 10;
console.log(sum); // outs 20

var diff = 5-2;
console.log(diff);

var product = 6 * 10;
console.log(product);

var quotient = 66 / 33;
console.log(quotient);

// INCREMETING- DECREMENTING NUMBERS-----------------------------------------

var myVar = 87;
myVar++;

myVar--;

// DECIMAL NUMBERS---------------------------------------------------------

var ourDecimal = 5.5;

var myDecimal = 0.009;

var product = (2.0 * 6.4);
var quotient = (4.6 / 2.3);
var remainder = (11 % 3);

// DECLARING STRINGS -----------------------------------------------------

var firstName = "Prashant";
var lastName = "Brahmbhatt";

var myStr = "I am a \"double quote\" inside a \"double quote\"";
// using escape sequencing for using quotations inside quotations

var myStr = 'hello these are "double quotes" inside single quotes'; 
// needs no escape sequencing 

var myStr = `'hello these are "double quotes" inside single quotes';`
// using backticks to use both quotes inside

/*
\'    single quote
\''   double quotes
\\    backslash
\n    newline
\r    carriage return
\t    tab
\b    backspace
\f    form feed
*/ 
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";


var str1 = "I come first";
var str2 = "I come Second";
var strFull = str1 + str2;
console.log(strFull);
// concatenating strings


var myStr = "This is the start. " + "This is the end";
console.log(myStr);

myStr += " This is another end"; //another way to concat
console.log(myStr);

//FINDING THE LENGTH ------------------------------------------------------------
myStr.length;
firstLetter = myStr[0]; // uses zero based indexing
secondLetter = myStr[1];

// strings are immutable

myStr[0] = "m"; //throws error
// although we can change the entire variable
myStr = "just another string";

lastLetterOfTheString = myStr[-1];
secondToLastLetter = myStr[myStr.length - 2];


//WORD BLANKS---------------------------------------------------------------------
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){

    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " +"to the store " + myAdverb;
    
    return result;

}

console.log(wordBlanks('dog','big','ran','quickly'));
console.log(wordBlanks('dog','big','ran','slowly'));

// ARRAYS ----------------------------------------------------------------------

var ourArray = ["John", 23]; // can be heterogeneous

var myArray = ["Quinn", 1];

var nestedArray = [["John",1], ["Wick", 2]] ;
// nested or multidimensional array

console.log(ourArray[1]);
console.log(nestedArray[0][0]); // arrays are also indexed b position

// Arrays are mutable and can be reassigned
var ourArray = [18, 64, 99];
ourArray[0] = 45;
console.log(ourArray);

//Manipulating array with push() and pop()
ourArray = ['Bruce','Wayne'];
ourArray.push('Clark');
ourArray.push('Kent')
console.log(ourArray);

ourArray.pop();
console.log(ourArray);

// Manipulating with shift() and unshift()
ourArray.shift(); // removes element from the left side
console.log(ourArray);
ourArray.unshift("Bruce"); // adds element to the begining of the array
console.log(ourArray);

// Shopping list
var myList = [['cerael',3], ['milk', 3],['bananas', 3],
                ["juice", 3]];

// FUNCTIONS--------------------------------------------------------------
function ourReusableFunction(){
    console.log("Heyya World!");
}

ourReusableFunction(); //calling the function
ourReusableFunction();

function reusableFunction(){
    console.log('Hola World');
}

reusableFunction();

// Functions with arguments
function ourFunctionWithArgs(a, b){
    return(a - b);
}

console.log("Answer of 10 - 5 = ", ourFunctionWithArgs(10, 5));
console.log("Answer of 20 - 9 = ", ourFunctionWithArgs(20, 9));
// both are using positional arguments


// GLOBAL SCOPE AND FUNCTIONS ---------------------------------------------------

var myGlobal = 10;

function fun1(){

    var oopsGlobal = 5; // if we do not put the 'var' keyword then oopsGlobal has become global
    // and is available in fun2 below as well
}

function fun2(){
    var output = "";
    if(typeof myGlobal != 'undefined'){
        output += "myGlobal: " + myGlobal;
    }

    if (typeof oopsGlobal != 'undefined'){
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun2();

// Local Scopes

function myLocalScope(){
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();
console.log(myVar); // will throw error since the scope ends at function end

// Local variable overrides global with same name in a function
var outerWear = "T-Shirt";
function myOutfit(){
    var outerWear = "Sweater";
    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);
//Functions do not necessarily require to return a value

// Assignment with a returned value
function returnFive(){
    var five = 5;
    return five;
}

var numFive = returnFive();
console.log(numFive);

// STAND IN LINE (QUEUE) --------------------------------------------------------

function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: "+ JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: "+ JSON.stringify(testArr));

// BOOLEAN VALUES ---------------------------------------------------------------
function welcomeToBooleans(){
    return true;
}

// conditionals control statements

function trueOrFalse(wasThatTrue){
    if (wasThatTrue){
        return "Yes, that was true";
    }
    return "No, that was False";
}

console.log(trueOrFalse(true));

// Comparisions
function testEqual(val){
    if (val == true){
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));


// The strict comparision
/* 
3 === 3
3 === '3'
*/

function testStrict(val){
    if (val === 7){
        return "Val is Equal";
    }
    return "Not Equal";
}

console.log(testStrict('7')); // outs "Val is Equal" in case of '=='

// use '!=' for comparing as not equal
// '!==' is strict not equal to operator

function testStrictNotEqual(val){
    if (val !== 17){
        return "Not Equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual('17')); // outs not equal

// Test Greater than

function testGreaterOrEqual(val){
    if (val >= 20){
        return "Over 20";
    }

    if (val >= 10){
        return "10 or over";
    }

    return "Less than 10";
}

console.log(testGreaterOrEqual(100));


function testSmallerOrEqual(val){
    if (val <= 20){
        return "Below 20";
    }

    if (val <= 10){
        return "10 below";
    }

    return "Less than 10";
}

console.log(testSmallerOrEqual(3));

// Logical AND
function testLogicalAnd(val){
    if (val <= 50 && val <= 25){
        return "YES"
    }
    return "NO";
}
console.log(testLogicalAnd(10));

// Logical OR
function testLogicalOr(val){
    if (val <= 50 || val >= 25){
        return "YES";
    }
    return "NO";
}
console.log(testLogicalOr(40));

//else statements
function testElse(val){
    if (val <= 50 && val >= 25){
        return "YES";
    }
    else{
        return "NO (in an else statement)";
    }
}
console.log(testElse(10));

// else if statements
//else statements
function testLogicalElseif(val){
    if (val <= 50){
        return "Less than 50";
    }
    else if(val <= 100){
        return "Less than 100";
    }
    else{
        return "less than infinity"
    }
}
console.log(testLogicalElseif(90));

// GOLF CODE -----------------------------------------------------------------
var names = ['Hole-in-one!', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey', 'Go Home'];

function golfScore(par, strokes){
    if (strokes == 1){
        return names[0];
    }
    else if(strokes <= par - 2){
        return names[1];
    }
    else if(strokes == par - 1){
        return names[2];
    }
    else if(strokes == par){
        return names[3];
    }
    else if(strokes == par + 1){
        return names[4];
    }
    else if(strokes == par + 2){
        return names[5];
    }
    else if(strokes >= par + 3){
        return names[6];
    }
    
}

console.log(golfScore(5, 4));


// CASE SWICTH--------------------------------------------------------------------
function caseInSwitch(val){
    var answer = "";
    switch (val){
        case 1: 
            answer = 'alpha';
            break; // omitting break will cause a fall through
        case 2:
            answer = 'beta';
            break;
        default:
            answer = 'default';
    }
    return answer;
}

console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));

// Multiple Outputs for single switch
function sequentialSizes(val){
    var answer = ''
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;   
    }
    return answer;
}

console.log(sequentialSizes(5));
// Switch statemets are easier to write than lot of else-if statements

// RETURNING BOOLEANS -----------------------------------------------------------
// while returning booleans the f -else are not always necessary
function isLess(a, b){
    // if (a < b){
    //     return true;
    // }
    // else{
    //     return false;
    // }

    return a < b;
}
console.log(isLess(2,4));

// RETURING UNDEFINED ----------------------------------------------------------------------

function abTest(){
    return undefined;
}
console.log(abTest());

// BUILDING OBJECTS ------------------------------------------------------------

var ourDog = {
    'name' : 'Auro',
    'legs' : 4,
    'has tails' : 1,
    'friends' : ['everything']
};

// uses key, value pairs rather than indexing to get the attributes
// keys and values can be any type

// Accesing object with dot notation
var dogName = ourDog.name;
var dogLegs = ourDog.legs;

console.log(dogName);
console.log(dogLegs);

// Accessing with bracket notation is necessary if the key has a space in it
console.log(ourDog['has tails']);

// Accessing with variables
var attrib = 'name';
var dogName = ourDog[attrib];
console.log(dogName);

// Changing values of Objects Keys

ourDog.name = "Aurangzeb";
console.log(ourDog.name);

// Adding new properties
ourDog.bark = "bow-wow";
console.log(ourDog);

// Delete objects from objects
delete ourDog.bark;
console.log(ourDog);
// Objects can be used as a replacements for switch statements in some cases

// Testing objects for properties
function checkObj(checkProp){
    if (ourDog.hasOwnProperty(checkProp)){
        return ourDog[checkProp];
    }
    else{
        return "Not Found";
    }
}
console.log(checkObj("name"));
console.log(checkObj("hello"));

// Manipulating Complex Objects
