const students = [
  {
    name: "Steven",
    age: 26,
    nationality: "Dutch",
  },
  { name: "Sina", age: 31, nationality: "Iranian" },
  {
    name: "Mahatab",
    age: 27,
    nationality: "Iranian",
  },
  {
    name: "Esteban",
    age: 37,
    nationality: "Colombian",
  },
];

//Old style functions
// function printName(name) {
//   console.log("This is my name", name);
// }

//New way of doing function
const printName = (name) => {
  console.log("This is my name", name);
};
// printName(students[0].name);

//Map Method

const printMessage = students.map((item) => {
  return `This is my name ${item.name}`;
});
// console.log(printMessage);
//Find Method
// const findMahtab = students.find((item) => {
//   return item.age === 27;
// });

//Filter Method

// const findMahtab = students.filter((item) => {
//   return item.age >= 27;
// });

// console.log(findMahtab);

//Spread Operator

const smartStudents = [
  ...students,
  {
    name: "Anna",
    age: 25,
    nationality: "Italian",
  },
];

console.log(smartStudents, students);

// The difference of FOrEach and Map
