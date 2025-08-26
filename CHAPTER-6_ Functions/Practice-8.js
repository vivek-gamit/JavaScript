//Write a discount calculator (HOF style)

function discount(amount){
    return function(discountrat){
        return amount - (amount*discountrat);
    }
}

const waffer = discount(20);
console.log(waffer(0.25));
