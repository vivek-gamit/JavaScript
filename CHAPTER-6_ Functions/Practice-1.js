// Write a BMI calculator function

function calculatebmi(height,weight){
    let bmi = weight/(height*height);

    if(bmi < 18.5){
        console.log("underweight");
    }else if(bmi < 24.9){
        console.log("Normal weight");
    }else if(bmi < 29.9){
        console.log("overweight");
    }else{
        console.log("Obese");
    }
}

calculatebmi(1.76,67);
