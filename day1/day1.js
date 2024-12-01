import { data } from './day1data.js';

//Split into 1 arrays
var dataArray = data.split("   ").join(',').split("\n").join(',').split(",")

let listLeft = [];
let listRight = [];

for(let i = 0; i < dataArray.length; i++)
    if(i%2==1)
    {
        listRight.push(Number(dataArray[i]))
        listLeft.push(Number(dataArray[i-1]))
    }

listLeft.sort();
listRight.sort();

function day1(){
    let difference = 0
    for(let i = 0; i< listLeft.length; i++)
    {
        difference += Math.abs(listRight[i] - listLeft[i])
    }
    return difference
}

function day2(){
    let similarity = 0;
    let calc = listLeft.map((number) => number * listRight.filter(entry => entry === number).length)
    for(let i = 0; i<calc.length;i++)
    {
        similarity+=calc[i]
    }
    return similarity
}

console.log(day1());
console.log(day2());