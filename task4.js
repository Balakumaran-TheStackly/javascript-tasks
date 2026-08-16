//Task-1
console.log("Level 1 -Variables & Operators");
console.log("Task-1 Salary Calculator");

let salary = 30000;
let bonus = 5000;
let tax = 2000;

let finalSalary=salary+bonus-tax;
console.log(`Final Salary is : ${finalSalary}`);


//Task-2
console.log("Task-2");

let a = 10;  //null //11 //12
let b = a++; //10
let c = ++a;  //12

console.log(a);
console.log(b);
console.log(c);


//Task-3
console.log("Task-3 Logical Operators");

console.log(10 > 5 && 20 < 10 || 5 === "5");  //false
console.log(10 < 5 || 20 >= 20 && 5 == "5");  //true
console.log(!(10 > 5));  //false

//Task-4
console.log("Level 2—Conditions");
console.log("Task-4 ATM Withdrawal");

let balance = 10000;
let withdrawal = 2500;

if (withdrawal>0 && withdrawal <=balance && withdrawal %100===0 ) {
    balance-=withdrawal
    console.log(`Withdrawal Successful, Remaining Balance : ${balance}`);
    
} else {
    console.error("Invalid Amount Withdrawal")
}

//Task-5
console.log("Task-5 Student Grade");

let mark=78;
let grade="";

if (mark>=90 && mark <=100) {
    grade="A";
    console.log(`Student Grade : ${grade}`);
} else if (mark>=80 && mark<=89) {
    grade="B";
    console.log(`Student Grade : ${grade}`);
} else if (mark>=70 && mark<=79) {
    grade="C";
    console.log(`Student Grade : ${grade}`);
} else if (mark>=60 && mark<=69) {
    grade="D";
    console.log(`Student Grade : ${grade}`);
} else if (mark>=0 && mark<=59) {
    grade="Fail";
    console.log(`Student Grade : ${grade}`);
} else {
    console.log("Invalid marks");
}

//Task-6
console.log("Task-6 Nested Login");  

let name="admin";
let password="1234";
let otp=5555;

let user=prompt("Enter User Name");
let userpassword=prompt("Enter Password");
let userotp=Number(prompt("Enter Otp"));
if (user === name) {
    if (userpassword === password) {
        if (userotp === otp) {
            console.log("Login Successful");
        } else {
            console.log("Invalid OTP");
        }
    } else {
        console.log("User Password is Incorrect");    
    }
} else {
    console.log("User Name is Incorrect");
}

//Task-7
console.log("Loops");

console.log("Task-7 Number Pattern");
let num=10;
for (let index = 1; index <= num; index++) {
    console.log(index);
}

//Task-8
console.log("Task-8 Multiplication Table");

let num8=7;
let table=10;
for (let a = 1; a <= table; a++) {
    console.log(`${num8} x ${a} = ${num8*a}`);
}

//Task-9
console.log("Task-9 Reverse Countdown");
let a9=10;
while (a9>=0) {
    console.log(a9);
    a9--;
}

//Task-10
console.log("Task-10 OTP System");
let correctOTP=1234;
let attempt10=3;

while (attempt10>=1) {
    let otp10=Number(prompt("Enter Your OTP"));
    if (otp10===correctOTP) {
        console.log("OTP Verified");
        break;
    }
    attempt10 --;
    if (attempt10===0) {
        console.log("Account Locked");
    }
}

//Task-11
console.log("Level 4 — Arrays & Objects");
console.log("Task-11 Array Search");

let fruits = ["apple", "banana", "orange", "grapes", "mango"];
for (let a11 of fruits) {
    console.log(a11);
}
console.log(`First Fruit : ${fruits[0]}`);
console.log(`Last Fruit : ${fruits[fruits.length-1]}`);

//Task-12
console.log("Task-12 Object Details");

let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Developer",
    salary: 45000
};
for (const key in employee) {
   console.log(key+" : "+employee[key]);
}

//Task-13
console.log("Level 5 — Functions");
console.log("Task-13 Calculator Function");

function calculator(a,b,operator) {
    if (operator==="+") {
        return add13(a,b);   
    } else if (operator==="-") {
        return sub13(a,b);   
    } else if (operator==="*") {
        return mul13(a,b);   
    } else if (operator==="/") {
        return div13(a,b);   
    } else if (operator==="%") {
        return mod13(a,b);   
    } else{
        return "Inappropriate Operator";
    }
}
function add13(a,b) {
    return a+b;
}
function sub13(a,b) {
    return a-b;
}
function mul13(a,b) {
    return a*b;
}
function div13(a,b) {
    return a/b;
}
function mod13(a,b) {
    return a%b;
}

console.log(calculator(20, 5, "+"));
console.log(calculator(20, 5, "-"));
console.log(calculator(20, 5, "*"));
console.log(calculator(20, 5, "/"));
console.log(calculator(20, 5, "%"));

//Task-14
console.log("Employee Salary");

function salaryDetails(salary,bonus) {
    return salary+bonus;
}
console.log(`Final salary ${salaryDetails(40000,5000)}`);

//Task-15
console.log("Task-15 Function With Default Parameter");

function employee15(name, role="Trainee") {
    console.log(`Employee Name : ${name}`);
    console.log(`Employee Role : ${role}`);
}

employee15("Arun");
employee15("Kamal", "Developer");

//Task-16
console.log("Level 6 — Advanced Functions");
console.log("Task-16");

function calculate(a,b,callback) {
    console.log(`Higher Order addition : ${a+b}`);
    callback(a,b);
}
function add16(a,b) {
    console.log(`Callback Addition : ${a+b}`);
}
function sub16(a,b) {
    console.log(`Callback Subtraction : ${a-b}`);
}
function mul16(a,b) {
    console.log(`Callback Multipilication : ${a*b}`);   
}

calculate(10,5,add16);
calculate(10,5,sub16);
calculate(10,5,mul16);

//Task-17
console.log("Task-17 Generator");

function * rewards(){
    yield "₹100 Cashback";
    yield "10% Discount";
    yield "₹500 Cashback";
    yield "20% Discount";
    yield "Better Luck Next Time";
}
let show17=rewards();

console.log(show17.next().value);
console.log(show17.next().value);
console.log(show17.next().value);
console.log(show17.next().value);
console.log(show17.next().value);
if (show17.next().done) {
    console.log("All Rewards are done");
}

//Task-18
console.log("Level 7 — Spread / Rest / Destructuring");
console.log("Task-18 Spread Operator");

let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Node", "Express", "MongoDB"];

let fullStack=[...frontend,...backend];
console.log(fullStack);

//Task-19
console.log("Task-19 Array Destructuring");

let student = ["Arun", "ECE", 8.5, "Developer"];

let [name19,department19,cgpa19,role19]=student;
console.log(name19,department19,cgpa19,role19);

//Task-20
console.log("Task-20 Nested Object Destructuring");

let company = {
    name20: "Stackly",
    employee20: {
        employeeName20: "Arun",
        role20: "Developer",
        salary20: 50000
    }
};

let {name20,employee20:{employeeName20,role20,salary20}}=company;

console.log(employeeName20);
console.log(role20);
console.log(salary20);


{
//Mini Project
//Student Management Console Programe

let students = [
    {
        name: "Arun",
        department: "ECE",
        mark: 85
    },
    {
        name: "Kamal",
        department: "CSE",
        mark: 72
    },
    {
        name: "Livin",
        department: "ECE",
        mark: 92
    }
];

function printAllStudent(students) {
    console.log("ALL Students");
    for (let all of students) {
        let{name,department,mark}=all;
        console.log(`Student Name : ${name}`);
        console.log(`Student Department : ${department}`);
        console.log(`Student Mark : ${mark}`);
    }
}

function deptStudents(dept) {
    console.log(`${dept} Students`);
    let count=0;
    for (let all of students) {
        let{name,department,mark}=all;
        if (dept === department) {
            console.log(`Student Name : ${name}`);
            console.log(`Student Department : ${department}`);
            console.log(`Student Mark : ${mark}`);
            count++;
        }
    }
    if (count===0) {
        console.log("Invalid Department");
    }
}

function aboveMarks(marks) {
    console.log(`${marks} above marks Students`);
    let count=0;
    for (let all of students) {
        let {name,department,mark}=all;
        if (mark>marks) {
            console.log(`Student Name : ${name}`);
            console.log(`Student Department : ${department}`);
            console.log(`Student Mark : ${mark}`);
            count ++;
        }
    }
    if (count===0) {
        console.log("Invalid Marks");    
    }
}


function studentMarks() {
    console.log(`Studnets Scores`);
    let totalMarks=0,average=0,highestMark=students[0].mark,lowestMark=students[0].mark,count=0;

    for (let all of students) {
        let{name,department,mark}=all;
        totalMarks=totalMarks+mark;
        if (highestMark<mark) {
            highestMark=mark;
        }
        if (lowestMark>mark) {
            lowestMark=mark;
        }
        count ++;
    }
    average=totalMarks/count;

    console.log(`Total Marks : ${totalMarks}`);
    console.log(`Average Marks : ${average}`);
    console.log(`Highest Mark : ${highestMark}`);
    console.log(`Lowest Mark : ${lowestMark}`);
    
    
}
//All Student
printAllStudent(students);
//Student Depatment
deptStudents("CSE");
//Student who got above marks
aboveMarks(90);
//Overall Student MArks Details
studentMarks();



}