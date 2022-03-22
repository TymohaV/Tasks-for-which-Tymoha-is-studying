const sortingHat = function () {
    const studentName = this.name
    if (studentName === "Harry Potter" || studentName === "Hermione Granger") {
        return `${studentName} is going to Gryffindor`;
    } else if (studentName === "Draco Malfoy") {
        return `${studentName} is going to Slytherin`;
    } else {
        return `fuck you ${studentName}! you are Muggle!`
    }
}


class Student {
    constructor(name) {
        this.name = name;
    }
}


let harry = new Student("Harry Potter");
let hermione = new Student("Hermione Granger");
let draco = new Student("Draco Malfoy");
let vlad = new Student("Vlad Timoshenko");

let sort = sortingHat.call(harry);



console.log(sort);