//Create a pure function to add tax
function addtex(amount,texrate){
    return amount + (amount * texrate);
}

console.log(addtex(100,0.05));
