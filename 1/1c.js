/* let passenger = ["Anand", "Vaisak", "Jewel", "Vaisak", "Abhijith", "Fazna", "Malavika"];

let person = "Vaisak";
let c = 0;
let b ;

for (let i = 0; i < passenger.length; i++) {

    if(passenger[i] == person){
        b = i;
        c += 1;  
        break;
    }
}
if (c != 0){
    console.log("found", passenger[b])
    console.log(b)
}
else{
    console.log("not Found")
} */



let passenger = ["Anand", "Vaisak", "Jewel", "Vaisak", "Abhijith", "Fazna", "Malavika"];

let person = "Visak";
let message = []
for (let i = 0; i < passenger.length; i++) {

    if(passenger[i] == person){
      
        message.push('found')
    }
    else{
        message.push('not found');
    }
}
let final = ''
message = new Set(message);
for(const entry of message){
   
    if(entry == "found"){
        final = entry
        break;
    }
    else{
        final = 'not found';
    }
}
console.log(final)