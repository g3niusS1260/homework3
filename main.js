'use strict';

const students = [
  { name: "Иван", grades: [5, 4, 3, 5] },
  { name: "Мария", grades: [5, 5, 5, 4] },
  { name: "Алексей", grades: [3, 3, 4, 3] }
];

function calculateAverage(grades){
    let gradesSum = 0;
    for(let grade of grades){
        gradesSum += grade;
    }
    return gradesSum / grades.length;
}

function getStudentReport(studentsList){
    const newList = [];
    let newObj = {};

    for(let student of studentsList){
        newObj = {name : student.name, average : calculateAverage(student.grades)};
        newList.push(newObj);
    }

    return newList;
}

