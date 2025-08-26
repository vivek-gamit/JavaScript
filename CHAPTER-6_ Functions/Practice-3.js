//Create a closure counter function

function createcounter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}

const counter1 = createcounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());

const counter2 = createcounter();
console.log(counter2());
console.log(counter2());
console.log(counter2());
