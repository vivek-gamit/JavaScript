//Write a function that returns another function

function intro(){
    return function inner(){
        return "Hello from inner function";
    };
}

const hello = intro();
console.log(hello());

console.log("");

function greet(name){
    return function(message){
        return `${message}, ${name}`;
    }
}
const hellovivek = greet("Vivek");
console.log(hellovivek("Hello"));
