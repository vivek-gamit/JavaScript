//Map prices to include GST (18%)
function addGST(price){
    return price.map(p => p+p*0.18);
}

let GST = addGST([100,200,300]);
console.log(GST); 
