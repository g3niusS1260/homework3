'use strict';

const names = ["иван", "АННА", "петр", "ОЛЬГА"];

function formatNames(namesArray){
    const newArray = [];
    for (let name of namesArray){
        let firstSymbol = name[0].toUpperCase();
        let taleName = (name.slice(1)).toLowerCase();
        newArray.push(firstSymbol.concat(taleName));
    }

    return newArray;
}

console.log(formatNames(names));
