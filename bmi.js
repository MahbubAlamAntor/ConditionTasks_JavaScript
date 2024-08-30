let weight = 80;
let height =1.8;
let BMI = (weight) / (height * height);
console.log(BMI.toFixed(2));
if(BMI<18.5){
    console.log("UnderWeight")
}else if (BMI>=18.5 && BMI<=24.9){
    console.log("Normal");
}else if (BMI>24.9 && BMI<=29.9){
    console.log("OverWeight")
}else{
    console.log("you are obese")
}