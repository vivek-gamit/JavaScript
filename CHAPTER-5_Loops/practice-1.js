//1 to 10
console.log("1 to 10")
for(let i=0; i<=10; i++){
    console.log(i);
}

//even 1 to 20
console.log("");
console.log("1 to 20 even");
for(let i=0; i<=20; i++){
    if(i%2===0){
        console.log(i);
    }
}

//Reverse a string using loop
console.log("")
console.log("Reverse a string using loop");
let str = "hello";
let reverse = "";
for(let i=str.length-1; i>=0; i--){
    reverse += str[i];
}
console.log(reverse);

//take input in js
console.log("");
console.log("take input");
let num = prompt("eneter range: ");
for(let i=0; i<=num; i++){
    if(i%3 === 0){
        console.log(i);
    }
}
