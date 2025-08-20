// Arithmetic Operation
console.log("Arithmetic Operation :");
let a = 10, b = 4;

console.log(a + b); //14
console.log(a - b); //6
console.log(a * b); //40
console.log(a / b); //2.5
console.log(a % b); //2
console.log( 2**b); //16

console.log("")
//Assignment Operators
console.log("Assignment Operators :")
let x = 10;
x +=5;
x -=3;
x *=2;
x /=4;
console.log(x);     //6

console.log("");
//Comparison Operators
console.log("Comparison Operators")
console.log(5 == "5");  //true
console.log(5 === "5"); //false
console.log(0 == false);    //true
console.log(0 === false);   //false
console.log(null == undefined); //true
console.log(null === undefined);    //false

console.log("");
//Logical Operators
console.log("Logical Operators");
console.log(true && false);     //false
console.log(true || false);     //true
console.log(!true);     //false
console.log(5 > 3 && 10 < 20);       //true
console.log(5 > 3 || 10 > 20);      //true
console.log(!0);        //true

console.log("")
//Unary Operator
console.log("Unary Operator");
let y = 5;
console.log(y++);   //5
console.log(++y);   //7
console.log(y--);   //7
console.log(--y);   //5 

console.log("")
//Ternary Operator
console.log("Ternary Operator");
let score = 80;
let grade = (score >= 80)?"Pass":"Fail";
console.log(grade);

console.log("")
//Tyeof Operator
console.log("Tyeof Operator");
console.log(typeof 123);    //number
console.log(typeof "hello");    //string
console.log(typeof null);   //object
console.log(typeof []);     //object
console.log(typeof function(){});   //function

console.log("")
//Trick Zone
console.log("Trick Zone");
console.log("5"+1);     //51
console.log("5"-1);     //4
console.log("5"*"2");   //10 
console.log("5" * 2);   //10
console.log(!!"");      //false
console.log(!!"hello"); //true
console.log([] == false);   //true
// console.log([] === false);   //false
