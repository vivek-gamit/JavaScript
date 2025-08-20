function cacl(a,b,operation){

    switch(operation){
        case ("+") :
            return a + b;
        case ("-") :
            return a - b;
        case ("*") :
            return a * b;
        case ("/") :
            return (b > 0)?a/b:"zero se divide nahi ho skta!!";
    }
}

console.log(cacl(2,2,"+")); //4
console.log(cacl(5,5,"-")); //0
console.log(cacl(6,2,"*")); //12
console.log(cacl(24,12,"/"));   //2
