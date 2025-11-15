'use strict';

let tasks = ["Выучить основы JS", "Помыть посуду", "Купить продукты"];

function addTask(list, taskName){
    if(list.includes(taskName)){
        console.log('Такая задача уже есть');
    }else{
        list.push(taskName);
    }
}

function completeTask(list, taskName){
    if(list.indexOf(taskName) !== -1){
        list.splice(list.indexOf(taskName), 1);
    }else{
        console.log('Такой задачи не существует');
    }
}

addTask(tasks, 'Помыть посуду');
addTask(tasks, 'Пропылесосить квартиру');
addTask(tasks, 'Выгулить собаку');

completeTask(tasks, 'Выгулить собаку');

console.log(tasks);