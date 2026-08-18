{
    console.log("Level 1-Basics");
    //Task-1
    console.log("Task-1 Student Details");

    let name="Bala", age=26, department="Chemical", cgpa=6.99;
    console.log(`Name : ${name}`);
    console.log(`Age : ${age}`);
    console.log(`Department : ${department}`);
    console.log(`Cgpa : ${cgpa}`);

    //Task-2
    console.log("Task-2 Simple Calculator");
    let a=20,b=10;

    console.log(`Addition : ${a+b}`);
    console.log(`Subtraction : ${a-b}`);
    console.log(`Multiplication : ${a*b}`);
    console.log(`Division : ${a/b}`);
    console.log(`Modulus : ${a%b}`);
    console.log(`Power : ${a**b}`);

    //Task-3
    console.log("Task-3 Age Checker");

    let age3=Number(prompt("Enter your age"));
    if (age3 >= 18) {
        console.log("Eligible to Vote");
    } else if (age3 < 18 && age3 > 0) {
        console.log("Not Eligible to Vote");
    } else{
        console.log("Invalid Age Entered");
    }

}
{
    console.log("Level 2 — Conditions");
    //Task-4
    console.log("Task-4 Student Grade");
    let mark= Number(prompt("Enter your Marks"));
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

    //Task-5
    console.log("Task-5 Login System");
    
    let correctUsername="admin";
    let correctPassword="1234";

    let userName=prompt("Enter User Name");
    let password=prompt("Enter Password");

    if (userName === correctUsername && password === correctPassword) {
        console.log("Login Successful");
    } else if (userName !== correctUsername && password !== correctPassword) {
        console.log("Invalid Credentials");
    } else if (userName !== correctUsername) {
        console.log("Invalid Username");
    } else {
        console.log("Invalid Password");
    }

    //Task-6
    console.log("Task-6 ATM Withdrawal");
    
    let balance=10000;
    let withdrawal=Number(prompt("Enter Withdrawal Amount"));

    if (withdrawal >0 && withdrawal <= balance && withdrawal%100 == 0) {
        balance -=withdrawal;
        console.log("Withdrawal Successful");
        console.log(`Balance : ${balance}`);
    } else if (withdrawal < 0) {
        console.log("Invalid Amount");
    } else if (withdrawal > balance) {
        console.log("Insufficient Balance");
    } else {
        console.log("Amount must be a multiple of ₹100");
        
    }
}

{
    console.log("Level 3 — Loops");
    //Task-7
    console.log("Task 7: Multiplication Table");
    
    let num=prompt("Enter the Number");

    for (let a = 1; a <= 10; a++) {
        console.log(`${num} x ${a} = ${num*a}`);
    }
    
    //Task-8
    console.log("Task-8 Reverse Number");
    
    let input=12345;
    let result="";
    
    while (input>0) {
       let last=input%10;
       result=result*10+last;
       input=parseInt(input/10);
    }
    console.log(`Reverse Number : ${result}`);

    //Task-9
    console.log("Task-9 OTP System");
    let correctOTP=1234;
    let attempts=3;

    while (attempts>=1) {
        let OTP=Number(prompt("Enter Your OTP"));
        if (OTP === correctOTP) {
            console.log("Correct : OTP Verified");
            break;
        } else {
            console.log("Wrong : Try Again");
            attempts --;
            if (attempts==0) {
                console.log("Account Blocked");
            }
        }
        
    }
}

{
    console.log("Level 4 — Functions");
    //Task-10
    console.log("Task 10: Salary Calculator");
    function calculateSalary(basicSalary=30000, bonus=5000) {
        return basicSalary+bonus;
    }
    console.log(calculateSalary(30000,5000));
    
    //Task-11
    console.log("Task-11 Calculator Function");
    function add(a,b) {
        return a+b;
    }
    function subtract(a,b) {
        return a-b;
    }
    function multiply(a,b) {
        return a*b;
    }
    function divide(a,b) {
        return a/b;
    }

    let addition=add(15,8);
    let sub=subtract(20,15);
    let mul=multiply(10,2);
    let div=divide(18,3);
    console.log("Addition : ",addition);
    console.log("Subtraction : ",sub);
    console.log("Multiple : ",mul);
    console.log("Divide : ",div);


    //Task-12
    console.log("Task-12 Eligibility Function");

    function checkEligibility(age, height, weight) {
        if (age>=21 && height>= 170 && weight>=70) {
            console.log("Eligible");
        } else if (age<21) {
            console.log("Age is not Eligible");
            
        } else if (height<170) {
            console.log("Height not Eligible");
            
        } else {
            console.log("weight is not Eligible");
        }  
    }
    let age=prompt("Enter Your Age");
    let height=prompt("Enter your heinght in cm");
    let weight=prompt("Enter weight in kg");

    checkEligibility(age,height,weight); 
    
}

{
    console.log("Level 5 -Array Practice");
    //Task-13
    console.log("Task-13 Shopping Cart");

    let cart = ["Laptop", "Mouse", "Keyboard"];

    cart.push("monitor");

    cart.splice(1,1);

    cart.unshift("Headset");

    cart.pop();

    console.log(`Final Cart : ${cart}`);
    
    
    //Task-14
    console.log("Task-14 Find Maximum");

    let numbers = [10, 45, 23, 89, 12, 67];
    let highest=numbers[0];
    for (let a = 0; a < numbers.length; a++) {
        if (highest < numbers[a]) {
            highest=numbers[a];
        } 
    }
    console.log(`Maximum Number : ${highest}`);
    
    //Task-15
    console.log("Task-15 Remove Duplicate");
    let input=[1, 2, 3, 2, 4, 1, 5];
    let result=[];

    for (let i = 0; i < input.length; i++) {
        if (!result.includes(input[i])) {
            result.push(input[i]);
        }
    }

    console.log(result);
    
    
}

{

    console.log("Level 6 — Higher-Order Functions");
    //Task-16
    console.log("Task-16 Employee Salary Filter");

    let employees = [
        {name: "Arun", salary: 30000},
        {name: "Bala", salary: 50000},
        {name: "Kumar", salary: 25000},
        {name: "Ravi", salary: 70000}
    ];

    let empSal=employees.filter((c,i,t)=>{
        return c.salary >=40000
    });
    console.log(empSal);
    
    //Task-17 
    console.log("Task-17 Increase Salary");
    
    let red=employees.map((c,i,t)=>{
        if (c.salary<40000) {
            return {
                name : c.name,
                salary : c.salary+5000

            }
        } else {
            return {
                name : c.name,
                salary : c.salary+10000

            }
        }
    });
    console.log(red);

    //Task-18
    console.log("Task-18 Total Salary");
    
    let totalSalary=employees.reduce((acc,c,i,t)=>{
        return acc+c.salary;
    });
    console.log(`Total Salary : ${totalSalary}`);
    
    //Task-19
    console.log("Task-19 Check Employee");
    let moreThan=employees.some((c,i,t)=>{
        return c.salary>100000
    });
    console.log(`Is there any employee earning more than ₹100000? : ${moreThan}`);

    let lessThan=employees.every((c,i,t)=>{
        return c.salary>=20000
    });
    console.log(`Are all employees earning at least ₹20000? : ${lessThan}`);
    
}

{

    //Task-20
    console.log("Task-20 Employee Management Mini Program ");
    let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 35000
    },
    {
        id: 102,
        name: "Bala",
        department: "HR",
        salary: 45000
    },
    {
        id: 103,
        name: "Kumar",
        department: "IT",
        salary: 60000
    }];
    console.log("All Employee Names");
    employees.forEach((ce,ind,ta)=>{
        console.log(`Employee Name : ${ce.name}`);
    })
    console.log("Employees in IT dept");
    let itEmploye=employees.filter((ce,ind,ta)=>{
        if (ce.department==="IT") {
            return ce;
        }
    })
    console.log(itEmploye);
    
    console.log("Employee salary Increase to 10%");
    let increaseSalary=employees.map((ce,ind,ta)=>{
        return {
            ...ce,
            salary: ce.salary + (ce.salary * 10 / 100)
        }
    })
    console.log(increaseSalary);
    
    console.log("Find one Employee using salary");
    let findEmployee=employees.find((ce,ind,ta)=>{
        if (ce.salary === 45000){
            return ce;
        }
    });
    console.log(findEmployee);

    console.log("Total Salary of All Employees");
    let totalSalary=employees.reduce((acc,ce,ind,ta)=>{
        return acc+ce.salary
    },0)
    console.log(totalSalary);
    
    console.log("Employees Earning more than ₹50000");
    let more=employees.some((ce,ind,ta)=>{
        return ce.salary > 50000
    })
    console.log(`whether anyone earns above ₹50000 : ${more}`);
    
    console.log("All Employees are earning more than ₹20000");
    let above=employees.every((ce,ind,ta)=>{
        return ce.salary>20000
    })
    console.log(`whether everyone earns above ₹20000 : ${above}`);
    
    console.log("Sorting Employees by salary");

    let sortEmployees=[...employees].sort((a,b)=>{
        return b.salary-a.salary;
    })
    console.log(sortEmployees);
    
    
    console.log("Destructure Employees name and salary");
    
    // let [{name:name1,salary:salary1},{name:name2,salary:salary2},{name:name3,salary:salary3}]=employees;
    // console.log(name1 +" - "+salary1);
    // console.log(name2 +" - "+salary2);
    // console.log(name3 +" - "+salary3);
    employees.forEach(({name, salary}) => {
        console.log(`${name} - ${salary}`);
    });

    
    console.log("New Employee List Spread Operator");
    
    let newEmployees=[...employees];
    console.log(newEmployees);
    


}