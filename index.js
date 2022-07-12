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

// console.log(smartStudents, students);

///For loop
const names = ["Maria", "Jhon", "Mark", "Joana", "Anna"];
// i++ is the same as as i=i+1
// for (let i = 0; i < 4; i = i + 2) {
//   console.log("This is the name", names[i]);
// }

//For Each

const eachTeste = names.forEach((name) => {
  return name;
});
console.log(eachTeste, "this is eachMethod");
// The difference of ForEach and Map

const array = names.map((item) => {
  return item;
});

console.log(array, "this is map teste");
