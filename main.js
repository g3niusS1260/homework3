'use strict';

const car = {
    brand : 'Bentley',
    model : 'Flying Spur',
    year : '2025',
    isEngineOn : false,
    startEngine : function(){
        this.isEngineOn = true;
        console.log(`Двигатель : ${this.brand} ${this.model} запущен.`);
    },
    stopEngine : function(){
        this.isEngineOn = false;
        console.log(`Двигатель : ${this.brand} ${this.model} заглушен.`);
    },
};