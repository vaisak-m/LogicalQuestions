let passenger = ["Anand", "Vaisak", "Jewel", "Vaisak", "Abhijith", "Fazna", "Malavika"];
let index = 0;
let store = [];

// for(let i = 0; i<passenger.length ;i++)
// {
// for(let j = i+1; j<=passenger.length ;j++)
// {
//     if(passenger[i]==passenger[j])
//     {
//         index = 1;
//     }
// }

// if(index ==1)
// {
//     console.log(passenger[i]);
//     store[i]=passenger[i];
// }
// else
// {
//     console.log("no duplicate")
// }

// }
// console.log(store);

const dps = passenger.filter((i, index) => passenger.indexOf(i) !== index)

console.log('Duplicate',dps);