console.log("Hello from JavaScript")

// in-line comment

/*this is a multi-line comment


hfLSFH
dsaşkfşlasi
dlsaig
dklfk
anyway


*/



/*Data Types:
undefined : is something that hasn't been defined.
you may have a variable that you haven't set to be anything yet

null : means nothing. so you've set it to be something and that
thin is nothing so you can say this is null or nothing

boolean : true or false 

string  : text

symbol : an immutable primitive value that is unique 

number : number 

object : can store a lot of different key value pairs 
*/



/* Variables : You are often going to set data into a variable
A variable allows computers to store and manipulate data in a dynamic fashion.
It's basically a label to point to the data.A variable is almost like a box.
And you can fill it anything. You will fill it with the data that you want.
So, to declare a variable, one way is to use the var key word.
var stands for variable. For example : */var myName = "Seda"
/* And you can just set it to another data types later. like  */ myName = 8



/* There are actualyy three ways to declare a variable in JavaScript.
var,let and const. For example : */
let ourName = "Seda and Aykut"
const pi = 3.14
/* The difference between var,let and const,
a var is going to be able to be used throughout your whole program.
let will only be used within the scope of where you declared that.
const is a variable that should never change */



/*Storing Values with Assignment Operator 

There's a difference between declaring variables and assignning variables.

*/

var a; // Here's how you assign a variable.So h,here,we are just declaring 
//a variable to be called a.
console.log(a)//it shows undefined


var b = 2; // And then here,we are assigning a variable. We are declaring and assigning
//in one line.//So,we are declaring it "var b" and then the equals sign is the assigment operator.
//It means that 2 is being assigned to b. We are not cehcking if b = 2. We are just assigning 2 to b.

/**You don't have to end line with a semicolon in JavaScript.But most people 
recommended that you put a semicolon just so it's obvious where the end of the line is.*/

/**So,after that we can actually assign other things. */
a = 7; //so,now I've just assigned 7 to a. I didnt declare a because it was already declared.
/**and I cand also say that */
b = a; /**So,I've assigned the contents of a to b
 */

/**console.log() allows you to see things in the console. */
console.log(a)//it shows 7


/**Initializing Variables with the Assignment Operator*/
var a = 9;

/**Unitialized Variables (var a ; , var b; , var c;) */

//Initialize these three variables
var a = 5;

var b = 10;

var c = "I am a";

//Do not change code below this line
a = a + 1;

b = b + 5;

c = c + "String!";

/**Case Sensitivity in Variables
 *  Variables names and function names in JavaScript are case sensitive.
 That means capitalization matters
 */

var myName = "Seda";
var lastName = "Ünal"
var phoneNumber = 123456789



/**Adding Numbers */

var sum = 10 + 10;
console.log(sum) // it shows 20


/**Substracting Numbers */

var difference = 45 - 33;
console.log(difference)// it shows 12


/**Multiplying Numbers */

var multiplying = 8 * 10;
console.log(multiplying)// it shows 80

/**Dividing Numbers */

var quotient = 60 / 3
console.log(quotient)// it shows 20

/** Incrementing Numbers */

var myVar = 87;
myVar++;
//myVar = myVar +1
console.log(myVar) // it shows 88

/**Decrement Numbers*/

var myNumber = 87;
myNumber--;
console.log(myNumber)// it shows 87

/**Decimel Numbers */

var decimal = 5.7
var decimal = 0.2
console.log(decimal) // it shows 0.2 

/**Remainder  
 * if I want to find out the remainder of 11 divided by 3,
 * I can do remainder = 11;
*/

var remainder;
remainder = 11 % 3;
console.log(remainder) // it shows 2 

/**Shurtcuts */

var a = 3;

/**instead of doing  */ a = a + 3; /**  we can do like this */ a += 3;
/**that's just a shortcut */

a -= 3;
a *= 3;
a /= 3;

/** String in JavaScript */

var myName = "Seda";
var myLastName = "Ünal"; /**That's how you declear string in javascript */


/**Escaping Literal Quotes */

var myString = "I am a \"double quoted\" string inside double quotes ";
/**when we put \" JavaScript knows that is should just mean a qutation mark */
console.log(myString) // it shows I am a "double quoted" string inside double quotes 

/**CODE OUTPUT
 \' single quote
 \" double quote
 \\ backslash
 \n newline
 \r carriage return
 \t tab
 \b backspace 
 \f form feed
 */

var myString = "Firstline\n\t\\SecondLine\nThirdLine"
console.log(myString)

/**it shows 
 * Firstline
 \SecondLine
ThirdLine */



/** Concatenating Strings with Plus Operator */

//Example 

var ourString = "I come first. " + "I come second. "

console.log(ourString) // it shows I come first. I come second. 


/** Concatenating Strings with Plus Equals Operator */

var ourString1 = "I come first. "

var ourString = "I come second. "

console.log(ourString1 += ourString) // it shows I come first. I come second.


/**Constructing Strings with Variables */

var myName = "Seda"
var mySentence = "My name is " + myName + " and I'm well !"

console.log(mySentence) // it shows My name is Seda and I'm well !

/**Apending Variables to String */

var anAdjective = "awesome";
var ourString = "freeCodeCamps is "
ourString += anAdjective

console.log(ourString) // it shows freeCodeCamps is awesome
//only change code below this line

var someAdjective = "worthwhile";
var myString = "Learning to code is "
myString += someAdjective

console.log(myString) // it shows Learning to code is worthwhile


/**Find Lenght of String */

var firstNameLength = 0
var firstName = "Seda"
firstNameLength = firstName.length

console.log(firstName.length) // it shows 4

/**Bracket Notation to Find First Character in String */

var lastNameLength = 0
var lastName = "Ünal"
lastNameLength = lastName[0]
console.log(lastNameLength) // it shows Ü

/**Most modern programming languages lik JavaScript don't start counting at 1like humans do
 * They started 0 which is called "Zero-based indexing"
 * So the number 0, that refers to first index of the string which would be the "Ü"
 * So Ü is the 0, n is the 1, a is the 2, and l is the 3 
 */


/**String immutability 
 
Strings are immutable meaning that cannot be altered once created . This does not mean that they cannot be changed,
just that the individual characters of a string literal cannot be changed . So look at this example
*/

var myString = "Jello world"

//myString [0] = H // it shows an error message instead od doing like that do like this :

myString = "Hello world"
console.log(myString)

/** Bracket Notation to Find Character in String  */

var lastName = "Ünal"
var thirdLetterofLastName = lastName[2]
console.log(thirdLetterofLastName)


/** Bracket Notation to Find Character Nth-toLast Character in String  */

var lastLetterOfLastName = lastName[lastName.length - 1]
console.log(lastLetterOfLastName) // it shows l



/**Word Blanks 
 * 
 * We are going to use our knowledge of strings to build a Mab Libs style word game.
 *  In a Mab Lib gama you are provided  sentences with some missing words like nouns,verbs,adjectives and adverbs.
 * An then you fill missing the pieces with words of your choices to make a sentence that could be funny and hopufully
 * makes a bit of sense. So let me show you how you do this : 
 * */

function wordBlanks(noun, anAdjective, verb, adverb) {

  var result = ""
  result += "The " + anAdjective + " " + noun + " " + verb + " to the store " + adverb
  return result
}
/**This uses also a function. Now we have'nt talked about functions yet. We'll talk about those more later. 
 * But for now just go with it because that's not the point of this lesson right now. But this function called
 * wordBlanks,you can call teh function and you have to pass in certsin types of words. You pass in a noun,adjective,verb
 * and adverb. So down you can see that we're calling the function called "wordBlanks".
 * And we're passing in a noun(dog), adjective(big),verb(ran) and adverb(quickly)*
 * So point is that we're going to use all these words that are passed in to a make a sentence.*/

console.log(wordBlanks("dog", "big", "run", "quickly")) // it shows The big dog run to the store quickly
console.log(wordBlanks("bike", "slow", "flew", "slowly")) // it shows The slow bike flew to the store slowly


/**Store Multiple Values with Arrays
 * 
 * Arrays allow you to store several pieces of data in one place . Arrays always start a bracket and 
 * then end with a bracket that to show the beginning and ending of the array. Every element in the array 
 * is seperated by a comma . Elements can be any data type .
 */
var ourArray = ["Seda", 13, 0.5, "Ünal"]


/** Nested Arrays 
 * 
 * When one of the elements in an array, is another array . That's called the nested array or a multidimensional array.
 * 
*/

var ourNestedArray = [["something", 1,], ["another thing", 2]]

/**Access Array Data with Indexes
 * 
 * Earlier we learned how to use bracket notation to find a specific Index in a string. 
 * You can do the same thing with with an array.
 */

var ourArray = [50, 60, 70]
var ourIndex = ourArray[0]
console.log(ourIndex) // it shows 50


/**Modify Array Data with Indexes
 * 
 * We can use array indexes to modify the array. We try to do this earlier with strings using bracket notation .
 * And we were not able to modify a string using bracket notaiton . But with arrays we can .
 */

var ourArray = [18, 20, 36];
ourArray[0] = 0
console.log(ourArray) //it shows [0,20,36]

/**Acces Multi-Dimensinol Arrays With Indexes */

var ourArray = [[18, 20, 36], [0, 1, 2], 1, 2, 3]
ourIndex = ourArray[0][2]
console.log(ourIndex) // it shows 36

/**Manipulate Arrays with Push()*/

var ourArray = ["Seda", "Ünal", "has", 3]
ourArray.push(["books", "and", 1, "cat"])
console.log(ourArray) // it shows 
// (5) ['Seda', 'Ünal', 'has', 3, Array(4)]
// 0: "Seda"
// 1: "Ünal"
// 2: "has"
// 3: 3
// 4: (4) ['books', 'and', 1, 'cat']
// length: 5
// [[Prototype]]: Array(0)


//Manipulate Array With pop ()

var myArray = [["John", 23], ["cat", 2]]
removedFromMyArray = myArray.pop()
console.log(myArray) // it shows  ['John', 23] 

/**Manipulate Arrays with shift () */

var myArray = [["John", 23], ["dog", 3]]
removedFromMyArray = myArray.shift()
console.log(myArray) // it shows ["dog",3]

/**Manipulate Arrays with unshift () */
var myArray = [["John", 23], ["dog", 3]]
myArray.shift()
myArray.unshift(["Paul", 34])
console.log(myArray) // it shows ['Paul', 34] ['dog', 3]

/**Shopping List */

var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["egs", 12]]

/**Write Reusable Code with Functions */

function reusableFunction() {
  console.log("Hey world!");

}

reusableFunction()
reusableFunction()
reusableFunction()
reusableFunction()

/**Passing Values to Functions with Arguments
 * Parameters are variables that act as place holders for the values  that are to be input to a function when it is called.
 * 
 */

function ourFunctionWithArgs(a, b) {
  console.log(a - b)
}
ourFunctionWithArgs(10, 5) // it shows 5

function FunctionWithArgs(a, b) {
  console.log(a + b)

}
FunctionWithArgs(10, 5) // it shows 15

/**Global Scope and Functions
 * 
 * Scopes refers to visibility of variables.
 * Variables which are defined outside of a function block have global scope. Global scope means that you can
 * be seen everywhere in your javascript code.
 * 
 */

var myGlobal = 10 /**Now since this  is set outside of a function ,
we can see it anywhere in the whole code. Even down below function called function2 */

function function1() {

  oopsGlobal = 5

}

function function2() {
  var output = ""

  if (typeof myGlobal != "undefined") {
    output += "myGlobal : " + myGlobal
  }
  console.log(output)

  if (typeof oopsGlobal != "undefined") {
    output += "oopsGlobal : " + oopsGlobal

  }
  console.log(output)
}



function1()
function2()
