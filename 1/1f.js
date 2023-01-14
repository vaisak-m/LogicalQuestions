let passenger = ["Anand", "Vai", "Jewel", "Vaisak", "Abhijith", "Fazna", "Malavika"];
let index = 0;

for(let i = 0; i<passenger.length ;i++)
{
for(let j = i+1; j<=passenger.length ;j++)
{
    if(passenger[i]==passenger[j])
    {
        index = 1;
    }
}


}

if(index ==1)
{
    console.log("duplicate found")
}
else
{
    console.log("no duplicate")
}