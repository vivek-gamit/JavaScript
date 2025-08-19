//loose equality
function isempty(value){
    return (value == null || value == undefined || value == "");
}

console.log(isempty(null));     //true
console.log(isempty(undefined));    //true
console.log(isempty(""));    //true
console.log(isempty(0));    //true
console.log(isempty("shuresh"));    //false

console.log("");
//strict equality
function isempty(value){
    return (value === null || value === undefined || value === "");
}

console.log(isempty(null));     //true
console.log(isempty(undefined));    //true
console.log(isempty(""));    //true
console.log(isempty(0));    //false --> now 0 give false 
console.log(isempty("shuresh"));    //false
