const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

let x = students.map((student) =>{
    let average = student.scores.reduce((acc, item) => acc + item, 0)/student.scores.length
    return {name: student.name, Average: average}
})

console.log(x)