const prompt=require("prompt-sync")({sigint:true});

let fare =parseInt( prompt('Enter the fare : ')) ;

let time = prompt('Enter the time : ') ;
if (time >=6 & time <= 9) {
    fare =fare+(fare * .1);
    console.log(fare) ; 
}
else if(time >9 & time <= 17){
    fare =fare+(fare * .2);
    console.log(fare) ; 
}

else if(time >17 & time <= 23){ 
    fare =fare+(fare * .07);
    console.log(fare) ;
}
else if(time >23 & time <6 ){
    fare =fare+(fare * .05);
    console.log(fare) ;
}


