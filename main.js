'use strict';


const students = [
  { name: "Иван", score: 120 },
  { name: "Мария", score: 95 },
  { name: "Алексей", score: 150 },
  { name: "Светлана", score: 80 },
  { name: "Дмитрий", score: 101 }
];

function getPassingStudents(studentsList, passingScore){
    const filterArray = studentsList.filter((element) => element.score >= passingScore);

    return filterArray;
}

console.log(getPassingStudents(students, 100));