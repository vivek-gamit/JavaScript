//Use IIFE to show welcome message
(function(){
    console.log("this is IIFE function");
})();

console.log("");
//with parameters
(function(name){
    console.log(`Hello ${name}`);
})("Vivek");
