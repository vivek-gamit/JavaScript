//Make a toUpperCase transformer using HOF
function toconvert(arr,fn){
    let result = [];
    for(let str of arr){
        result.push(fn(str));
    }
    return result;
}

function convertToUppercase(str){
    return str.toUpperCase();
}

let words = ["hitesh","raj","shreyiansh","gpt"];
let upperwords = toconvert(words,convertToUppercase);

console.log(upperwords);
