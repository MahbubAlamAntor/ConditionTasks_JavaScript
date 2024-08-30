// let weight = 80;
// let height = 1.9;
// BMI= (weight) / (height * height);
// if(BMI<18.5){
//     console.log('Underweight')
// }else if (BMI>=18.5 && BMI <=24.9){
//     console.log('Normal');
// }else if(BMI >=25 && BMI<= 29.9){
//     console.log('OverWeight')
// }else{
//     console.log('You Are Obese')
// }


//  user promt

let weight = prompt("Enter Your Weight");
let height = prompt("Enter Your Height");
BMI = (weight) / (height * height);
if (BMI<18.5){
    document.write("UnderWeight");
} else if (BMI>=18.5 && BMI<=24.9){
    document.write("Normal");
}else if (BMI >=25 && BMI <= 29.9){
    console.log("Your Are OverWeight")
}else {
    console.log("Your Are Obese")
}