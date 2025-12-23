const student = [
    {
        name: "abc",
        mark: 85,
        department: "Computer Science"
    },
    {
        name: "def",
        mark: 75,
        department: "AIDS"
    },
    {
        name: "xyz",
        mark: 88,
        department: "vlsi"
    }
];

totalMarks = function () {
    let total = this.s1 + this.s2 + this.s3 + this.s4;
    return total;
}

function processResult(department, printResult) {
    for (let i = 0; i < student.length; i++) {
        Array.sort(student[department]);

    }
    printResult(totalMarks);
}

printResult = function (totalMarks) {
    for (let i = 0; i < student.length; i++) {
        console.log(`Name: ${student[i].name}, Total Marks: ${totalMarks.call(student[i])}`);
    }
}

processResult();