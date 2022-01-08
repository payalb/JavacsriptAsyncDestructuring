let student = {
    firstname: "ryaz",
    lastname: "sharma",
    age: 22,
    subjects: ["java", "c", "j2ee"]
};

let {firstname: fname, lastname, ...details} =  student;
console.log(fname);
console.log(details.age)
console.log(details.subjects)