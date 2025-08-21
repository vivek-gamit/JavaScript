function grade(marks){
    if(marks >= 90 && marks <= 100){
        return "A";
    }else if(marks >= 80 && marks <= 89){
        return "B";
    }else if(marks >= 70 && marks <= 79){
        return "C";
    }else if(marks >= 60 && marks <= 69){
        return "D";
    }else if(marks >= 50 && marks <= 59){
        return "E";
    }else{
        return "F";
    }
}

console.log(grade(85));
console.log(grade(76));
console.log(grade(33));
console.log(grade(55));
console.log(grade(99));
