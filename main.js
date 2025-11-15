'use strict';

const salaries = {
    ivan: 1200,
    maria: 1500,
    petr: 1100,
    anna: 1600
};

let totalSum = 0;

for(let person in salaries){
    totalSum += salaries[person];
}

console.log(totalSum);