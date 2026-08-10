//Task - 1
console.log("Task - 1");

const studentName="Bala";
const studentAge=26;
var studentCourse="Software Development";
let studentMark=99;

console.log(`Student Name : ${studentName}`);
console.log(`Student Age : ${studentAge}`);
console.log(`Student Course : ${studentCourse}`);
console.log(`Student Mark : ${studentMark}`);

//Task - 2
console.log("Task - 2");

let name2=prompt("Enter your Name");
let age2=prompt("Enter Your Age");

console.log(`Name : ${name2}`);
console.log(`Age : ${age2}`);

alert(`Your Name is : ${name2}`);
alert(`Your Age is : ${age2}`);

//Task - 3
console.log("Task - 3");

let name3="Bala";
let age3=26;
let areyoudeveloper=true;
let love;
let marriage =null;

console.log(name3,typeof(name3));
console.log(age3,typeof(age3));
console.log(areyoudeveloper,typeof(areyoudeveloper));
console.log(love,typeof(love));
console.log(marriage,typeof(marriage));

//Task - 4
console.log("Task - 4");

let shopping=["Shirt", "Pant", "Shoes", "Watch", "Bag", "Cap"];

console.log(`First Product : ${shopping[0]}`);
console.log(`Third Product : ${shopping[2]}`);
console.log(`Last Product : ${shopping[shopping.length-1]}`);
console.log(`Products : ${shopping}`);


//Task -5
console.log("task - 5");

let emp={
    name:"Vicky",
    age:30,
    role:"Chief Engineer",
    salary:50000
}
console.log(`Employee Name : ${emp.name}`);
console.log(`Employee Age : ${emp.age}`);
console.log(`Employee Role : ${emp.role}`);
console.log(`Employee Salary : ${emp.salary}`);


//Task - 6
console.log("Task - 6");

let productPrice=500;
let quantity=3;

let totalPrice=productPrice*quantity;
let discount =100;
let finalAmount=totalPrice-discount;

console.log(`Total Price is : ${totalPrice}`);
console.log(`Discount is : ${discount}`);
console.log(`Final Bill amount is : ${finalAmount}`);

//task - 7
console.log("Task - 7");

console.log(25 > 20);  //true
console.log(15 < 10);  //false
console.log(50 == "50");  //true
console.log(50 === "50");  //false
console.log(100 != "100");  //false
console.log(100 !== "100");  //true

//task - 8
console.log("Task - 8");

console.log(10 > 5 && 20 > 15 || 5 > 10);  //true

console.log(10 < 5 || 20 >= 20 && 5 == "5");  //true

console.log(15 === "15" || 10 > 5 && 8 < 3); //false
 
console.log(20 >= 20 && 5 !== "5" || 10 < 5);  //true
 
console.log(25 < 20 || 30 == "30" && 10 >= 10);//true

//Task - 9
console.log("Task - 9");

let passwordCorrect=true;

let login=((passwordCorrect==true)?"Login successful":"Invalid password");
console.log(login);


//Task - 10
console.log("Task - 10");

let mark1 = "80";
let mark2 = "70";

mark1=Number(mark1);
mark2=Number(mark2);
let totalmark=mark1+mark2;
console.log(totalmark);


//Task - 11
console.log("Task - 11");

let age11=20;

if (age11>=18) {
    console.log("You can Vote");
    
} else {
    console.log("You cannot Vote");
}


//Task - 12
console.log("Task - 12");

let mark=49;
let grade;
if (mark>=90 && mark<=100) {
    grade="A Grade";
    console.log(grade);
    
}else if (mark>=75 && mark<=89) {
    grade="B Grade";
    console.log(grade);
}else if(mark>=50 && mark<=74) {
    grade="C Grade";
    console.log(grade);
}else if(mark>=0 && mark<50) {
    grade="Fail";
    console.log(grade);
}else {
    grade="Invalid Mark";
    console.log(grade);
}

//Task - 13
console.log("Task - 13");

let time=20;

if (time>=1 && time<=6) {
    console.log("Early Morning");
} else if(time>=7 && time<=12) {
    console.log("Good Morning");
} else if(time>=13 && time<=15) {
    console.log("Good Afternoon");
} else if(time>=16 && time<=19) {
    console.log("Good Evening");
} else if(time>=20 && time<=24) {
    console.log("Good Night");
} else {
    console.log("Invalid Time");
}


//Task - 14
console.log("Task - 14");

let age14=26;
let height14=185;
let weight14=80;

if (age14>=21) {
    if (height14>=170) {
        if (weight14>=70) {
            console.log("Congratulations! You are Selected");
        } else {
            console.log(`You are not selected, eligible Weight is 70 kg but your Weight ${weight14}kg`);
        }
    } else {
        console.log(`You are not selected, eligible Height is 170 cm but your Height ${height14}cm`);
    }
} else {
    console.log(`You are not selected, eligible age is 21 but your age ${age14}`);
    
}


//Task - 15
console.log("task - 15");

let trafficLight="white";

switch(trafficLight){
    case "red":
        console.log("Stop the Vehicle");  
        break;
    case "yellow":
        console.log("Get ready");
        break;
    case "green":
        console.log("Go");
        break;
    default :
        console.log("Invalid traffic light");  
}
