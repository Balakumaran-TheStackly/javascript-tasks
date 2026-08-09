//Task-1
console.log("Task - 1");

const collegeName="Paavai Engineering College";
let studentName="Balakumaran";
var studentAge=26;

console.log(collegeName,"\n",studentName,"\n",studentAge);

//Task-2
console.log("Task - 2");
let price=25000;
price=27000;
console.log(`Updated price : ${price}`);

//Task-3
console.log("Task - 3");
const companyName="TrueCare Solution";
// companyName ="CareTrue";
 console.log(companyName);   //-->TypeError: Assignment to constant variable.

//Task-4
console.log("Task - 4");
console.log('"Login Successful"');

console.warn('"password is Weak"');

console.error('"Network Error"');

//Task-5
console.log("Task - 5");
let name5="Balakumaran";
let age5=26;
let areYouaDeveloper=true;
let time;

console.log(name5, typeof name5);
console.log(age5, typeof age5);
console.log(areYouaDeveloper, typeof areYouaDeveloper);
console.log(time, typeof time);


//Task-6
console.log("Task - 6");
let cart=["Laptop","Mouse","Keyboard","Headset", "Monitor"];

console.log('First Product: '+cart[0]);
console.log('Third Product: '+cart[2]);
console.log('Last  Product: '+cart[cart.length-1]);


//Task-7
console.log("Task - 7");
let movie=["Premam","Mozhi","Iyarkai","Nitham oru vaanam","Shyam singa Roy","Idhayam"];

console.log('2nd Movie: '+movie[1]);
console.log('5th Movie: '+movie[4]);
console.log('Last Movie: '+movie[movie.length-1]);

//Task-8
console.log("Task - 8");
let emp={
    name:"Balakumaran",
    age:26,
    dept:"Developer",
    skills:["Java","HTML","CSS","SQL"],
    salary:25000
}
console.log('Employee Name: '+emp.name);
console.log('Employee Dept: '+emp.dept);
console.log('Employee First Skill: '+emp.skills[0]);
console.log('Employee Salary: '+emp.salary);


//Task - 9
console.log("Task - 9");
let prd={
    productName:"Laptop",
    brand:"Lenovo",
    price:"49000",
    colors:["Black","Silver","Gray"]
}

console.log("Product Brand: "+prd.brand);
console.log("Product Price: "+prd.price);
console.log("Second Color: "+prd.colors[[1]]);

//Task- 10
console.log("Task - 10");
let x=10, y=4;

console.log(`Addition: ${x+y}`);
console.log(`Subtraction: ${x-y}`);
console.log(`Multiplication: ${x*y}`);
console.log(`Division: ${x/y}`);
console.log(`Modulus: ${x%y}`);
console.log(`Exponent: ${x**y}`);

//Task -11
console.log("Task - 11");

let a=5;
console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);

//Task - 12
console.log("Task - 12");
let a12=10;   //a=null
let b12 = a12++; //b=10, a=11
let c12 = ++b12; //c=11, b=11

console.log(a12);  
console.log(b12);
console.log(c12);

//Task - 13
console.log("Task - 13");
let x13 = 7;  //x=nu;;
let y13 = --x13; //y=6, x=6 
let z13 = y13++; //z=6, y=7

console.log(x13); //x=6
console.log(y13); //y=7
console.log(z13); //z=6

//Task - 14
console.log("Task - 14");
let school={
    schoolName:"Sakthi Matriculation Higher Secondary School",
    principal:"Mrs.Latha Msc M.Ed",
    totalStudents:1200,
    class:["LKG","UKG","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th"],
}
console.log(`School Name: ${school.schoolName}`);
console.log(`Principal: ${school.principal}`);
console.log(`Last Class: ${school.class[school.class.length-1]}`);

//Task - 15
console.log("Task - 15");
let grocery=["Rice","Wheat","Sugar","Salt","Oil","Tea","Coffee","Milk"];
console.log(`First Item: ${grocery[0]}`);
console.log(`Fourth Item: ${grocery[3]}`);
console.log(`Last Item: ${grocery[grocery.length-1]}`);

//Task - 16
console.log("Task - 16");
let userName="Balakumaran";
let email="balakumaran@thestackly.com";
let age=26;
let isPremium=true;

console.log(userName + " " + typeof userName);
console.log(email + " " + typeof email);
console.log(age + " " + typeof age);
console.log(isPremium + " " + typeof isPremium);

//Task - 17
console.log("Task - 17");

var a17=10;
let b17=20;
const c17=30;

a17=15; // can reInitialize
b17=25;  // can reInitialize
// c17=35;  //-->TypeError: Assignment to constant variable.

var a17=50;  //allowed  to redeclare
// let b17=60; //SyntaxError: Identifier 'b17' has already been declared
// const c17=70;  //SyntaxError: Identifier 'c17' has already been declared

console.log(a17,b17,c17);

//Task - 18
console.log("Task - 18");
let tamil = 85;
let english = 90;
let maths = 95;

let total=tamil+english+maths;
let avg=total/3;

console.log(`Total Marks: ${total}`);
console.log(`Average Marks: ${avg}`);

//Task - 19
console.log("Task - 19");

let cm={
    company:"TrueCare Solution",
    employees:["Bala","kumaran","Mani","Kishor","Vicky"],
    location:"Kolli Hills' Namakkal",
    foundedYear:2000,
    ceo:"Balakumaran Nadarajan"
}
console.log(`CEO : ${cm.ceo}`);
console.log(`Location : ${cm.location}`);
console.log(`First Employee : ${cm.employees[0]}`);

//task - 20
console.log("Task - 20");
let profile={
    name:"Bala",
    city:"Namakkal",
    hobbies:["Treking", "riding", "Songs", "cricket"],
    age:26
}

console.log(`Name : ${profile.name}`);
console.log(`Second Hobby : ${profile.hobbies[1]}`);
console.log(`Age : ${profile.age}`);
