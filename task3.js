//Task-1
console.log("Task-1 Employee Eligibility");

let employeeName=prompt("Enter your Name");
let age=prompt("Enter your Age");
let experince=prompt("Enter your Experience");;
let salary=prompt("Enter your Salary");;

if (age>=21) {
    if (experince>=1) {
        if (salary>=20000) {
            console.log("Employee is eligible");
            
        } else {
            console.log(`Not eligible because eligible salary is equal or above 20000 but your salary is ${salary}`);
        }
    } else {
        console.log(`Not eligible because eligible Experience is more or equal to 1 year but your experience is ${experince}`);    
    }
} else {
    console.log(`Not eligible because eligible age is 21 but your age is ${age}`);
    
}

//Task-2
console.log("Task-2 ATM Withdrawal");

let currentBalance=10000;
let withdrawal=prompt("Enter withdrawal amount: ");

if (withdrawal>0 && withdrawal<=currentBalance && withdrawal%100==0) {
    currentBalance -= withdrawal;
    console.log("Withdrawal Successful");
    console.log(`Remaining balance: ${currentBalance}`);
} else{
        console.log("Invalid Amount Entered, Provide correct amount");     
}

//Task-3
console.log("Task-3 Login System");

let correctUsername = "admin";
let correctPassword = "12345";

let attempt=3;

while (attempt>=1) {
    let userName=prompt("Enter User Name");
    let  password=prompt("Enter Password");
    if (userName === correctUsername && password === correctPassword) {
        console.log("Login Successful");
        break;
    } else {
        console.log("Invalid Creadentials");
    }
    attempt --;
    if(attempt==0){
        console.log("Account Locked, Login Attempted 3 times");
    }
}

//Task-4
console.log("Task-4");

let math=prompt("Enter your Maths mark");
let english=prompt("Enter your English mark");
let science=prompt("Enter your Science mark");
let social=prompt("Enter your Social mark");
let computer=prompt("Enter your Computer mark");

function marks(mark){
    if (mark>=90 && mark<=100) {
        let grade="A";
        return grade;
    } else if (mark>=80 && mark<=89) {
        let grade="B";
        return grade;
    } else if (mark>=70 && mark<=79) {
        let grade="C";
        return grade;
    } else if (mark>=60 && mark<=69) {
        let grade="D";
        return grade;
    } else if (mark<60 && mark >=0) {
        let grade="F";
        return grade;
    } else{
        return "Invalid Marks";
    }
}

let totalmarks= Number(math)+Number(english)+Number(science)+Number(social)+Number(computer);
let averageMarks=totalmarks/5;

let grade=marks(averageMarks);

console.log(`Total Marks : ${totalmarks}`);
console.log(`Average Marks : ${averageMarks}`);
console.log(`Grade : ${grade}`);


//Task-5
console.log("Task-5 Number Pattern");

for (let index = 1; index <= 5; index++) {
    console.log(index);
}
// console.log("Using For of loop");
// let a5="54321";
// for (let c of a5) {
//     console.log(c);
    
// }
console.log("In Reverse Order");

for (let index = 5; index >= 1; index--) {
    console.log(index);
}
let result="";

for (let index = 1; index <= 5; index++) {
    result +=index+" ";
}
console.log("Inline");
console.log(result);

//Task-6
console.log("Task-6 Shopping Cart");

let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
let prices = [50000, 1000, 2000, 15000];
let totalAmount=0;

for (let index = 0; index < products.length; index++) {
    console.log(products[index]+" - ₹"+prices[index]);  
    totalAmount+=prices[index]; 
}
console.log(`Total Amount : ${totalAmount}`);

//Task-7
console.log("Task-7 Employee Object");

let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Software Engineer",
    salary: 45000
};
for (let emp in employee) {
    console.log(emp, employee[emp]);
}
function calculateBonus(salary) {
        if (salary>=40000) {
            return 5000;
        } else {
            return 3000;
        }  
}

console.log("After Bonus");

let bonus=calculateBonus(employee.salary);

for (let emp in employee) {
    console.log(emp, employee[emp]);
}
console.log(`Bonus ${bonus}`);
console.log(`Total Salary with Bonus : ${employee.salary+bonus}`);



//Task-8
console.log("Task-8 Bank Account Functions");

function deposit(balance,depo) {
    if (depo>0) {
        console.log(`Deposited: ₹${depo}`);
        return balance+depo;
    } else {
        console.log(`Invalid Deposit Amount`);
        return balance;
    }
}
function withdraw(balance,draw) {
    if (draw<=balance) {
        console.log(`Withdrawn: ₹${draw}`);
        return balance-draw;
    } else {
        console.log(`Invalid Withdraw Amount`);
        return balance;
    }
}
function checkBalance(balance) {
    console.log(`Current Balance : ${balance}`);

    return balance;
}

let balance=10000;

balance=deposit(balance,5000);
balance=withdraw(balance,2000);
balance=checkBalance(balance);

//Task-9
console.log("Task-9 Callback Calculator");

function add(a,b) {
    return a+b;
}
function sub(a,b) {
    return a-b;
}
function mul(a,b) {
    return a*b;
}
function div(a,b) {
    return a/b;
}

function calculate(callback,a,b) {
    let result = callback(a,b);
    return result;
}

console.log(calculate(add, 20, 10));
console.log(calculate(sub, 20, 10));
console.log(calculate(mul, 20, 10));
console.log(calculate(div, 20, 10));
