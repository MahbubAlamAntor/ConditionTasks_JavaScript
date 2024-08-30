const age = 105;
const ticketPrice =120;
let student =true;
if (age<10){
    console.log("Free")
}else if (!student){
    // 50% discount
    const halfPrice = ticketPrice *50/100;
    const payAmount = ticketPrice - halfPrice;
    console.log(payAmount);
}else if(age>=60 && age<=100){
    // 15% discount
    const halfPrice = ticketPrice *15/100;
    const payAmount = ticketPrice - halfPrice;
    console.log(payAmount);
}else{
    console.log(ticketPrice);
}