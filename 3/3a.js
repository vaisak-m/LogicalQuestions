const prompt=require("prompt-sync")({sigint:true})

let fare = [];

for(let i = 0; i < 10; i++){
  
    let price = prompt("Enter the fare:");
    fare.push(price);
}

console.log( 'Ascending order of fare:'+fare.sort());

console.log( 'Descending order of fare:'+fare.reverse());

console.log( 'Minimum value:',fare.sort()[0]);

console.log( 'Maximum value:',fare.sort()[fare.length - 1]);

let findFare = prompt('Enter the value to be find : ');

let flag = 0;

fare.forEach(element => {

    if (findFare == element) {
       flag = 1;
       console.log(element);
    }
});

if (flag == 0){
    console.log('not found');
}

const findDuplicates = fare =>fare.filter((i,index)=>fare.indexOf(i)!==index)

const duplicates = findDuplicates(fare);

console.log("Repeated Element", duplicates);