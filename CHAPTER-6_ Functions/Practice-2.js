//Create a greet function with default name
function greet(name){
    console.log(`Good Morning ${name}`);
}
greet("Vivek");

console.log("");
//Sum all numbers using rest parameter

function sumAll(...numbers){
    let total = 0;
    for(let num of numbers){
        total += num;
    }
    return total;
}

console.log(sumAll(5));
console.log(sumAll(1,2,3,4,5,6,7,8,9));
