//Find the first student with grade A

let students = [
    { name: "Raj", grade: "B" },
    { name: "Hitesh", grade: "C" },
    { name: "Harry", grade: "A" },
    { name: "Shreyansh", grade: "B" }
];

let firstgradeA = students.find(student => student.grade === "A");

console.log(firstgradeA);
