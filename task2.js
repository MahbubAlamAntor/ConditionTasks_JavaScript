const marks =34;
if (marks >=80 && marks<=100){
    grade = "A+";
}else if (marks<=79 && marks >=70){
    grade = "A";
}else if(marks >=60 && marks<=69){
    grade = "A-";
}else if (marks >=50 && marks<=59){
    grade ="B";
}else if (marks >=40 && marks <=49){
    grade ="C";
}else if (marks<=40 && marks >=33){
    grade = "D";
}
else{
    grade = "F";
}
console.log(grade);