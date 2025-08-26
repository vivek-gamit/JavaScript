//Use some() to check if any student failed
let students = [
    { name: "Raj", marks: 75 },
    { name: "Hitesh", marks: 45 },
    { name: "Shreya", marks: 30 }, // failed
    { name: "Harry", marks: 80 }
];

let hasfaild = students.some(student => student.marks < 40);
console.log(hasfaild);
