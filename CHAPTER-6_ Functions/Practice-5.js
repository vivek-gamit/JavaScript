//Use a function to log even numbers in array

function longevenarray(arr){
    for(let num of arr){
        if(num%2 === 0){
            console.log(num);
        }
    }
}

longevenarray([1,2,3,4,5,6,7,8,9]);
