let passenger = ["Anand", "Vaisak", "Jewel", "Vaisak", "Abhijith", "Fazna", "Malavika"];

for (let i = 0; i < passenger.length; i++) {

    for( let j = 0; j <= i; j++)

    if (passenger[i] < passenger[j]) {
        let swap = passenger[i];
        passenger[i] = passenger[j];
        passenger[j] = swap;
    }
    
}

console.log(passenger);