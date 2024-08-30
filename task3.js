const score = 85;
if(score>=80){
    const friend = 60;
    if(friend<=100 && friend>=80){
        console.log("Then Go For A Lunch");
    }else{
        if(friend<80 && friend>=60){
            console.log("Good Luch Next Time");
        }else {
            if(friend<60 && friend>=40){
                console.log("Message Unseen");
            }else{
                if(friend<40){
                    console.log("block");
                }
            }
        }
    }
    
}else{
    console.log("Back home and sleep and act sad")
}