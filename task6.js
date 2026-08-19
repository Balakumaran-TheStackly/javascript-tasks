{
    let employees = [
        {
            id: 101,
            name: "Arun",
            department: "IT",
            salary: 45000,
            experience: 2,
            skills: ["HTML", "CSS", "JavaScript"]
        },
        {
            id: 102,
            name: "Bala",
            department: "Developer",
            salary: 60000,
            experience: 1,
            skills: ["Java","SQL","J2EE"]
        },
        {
            id: 103,
            name: "Kumaran",
            department: "Testing",
            salary: 50000,
            experience: 3,
            skills: ["Java", "SQL", "J2EE"]
        },
        {
            id: 104,
            name: "Vicky",
            department: "Developer",
            salary: 75000,
            experience: 10,
            skills: ["Java","HTML","Spring"]
        },
        {
            id: 105,
            name: "Keerthana",
            department: "Testing",
            salary: 80000,
            experience: 8,
            skills: ["SQL","MySQL","JDBC"]
        },
        {
            id: 106,
            name: "Kishor",
            department: "Developer",
            salary: 40000,
            experience: 0.5,
            skills: ["HTML", "CSS", "Python"]
        },
        {
            id: 107,
            name: "Jeeva",
            department: "Devops",
            salary: 30000,
            experience: 0,
            skills: ["Java","SQL","HTML"]
        },
        {
            id: 108,
            name: "Kavin",
            department: "Testing",
            salary: 90000,
            experience: 7,
            skills: ["C", "C++","embeded"]
        }
        ,
        {
            id: 109,
            name: "Gowtham",
            department: "HR",
            salary: 50000,
            experience: 5,
            skills: ["Hiring", "Data Storing","communication"]
        }
    ];
    //All Employees
    employees.forEach((ce,ind,ta)=>{
        console.log(`EMP ID : ${ce.id}`);
        console.log(`Name : ${ce.name}`);
        console.log(`Department : ${ce.department}`);
        console.log(`Salary : ${ce.salary}`);
        console.log(`Experience : ${ce.experience}`);
        console.log(`Skills : ${ce.skills}`);
    });
    //Filter Employees by salary 
    let empSal=employees.filter((ce)=>{
        return ce.salary > 40000
    })
    console.log("Employees Salary greater than ₹40,000.");
    console.log(empSal);

    //3.find Employee
    let searchId=104;
    let findEmp=employees.find((ce)=>{
        if (ce.id===searchId) {
            return ce
        }
    })
    console.log(`${searchId} Employee Details are`);
    console.log(findEmp);

    //4..Total Salary
    let totalSalary=employees.reduce((acc,ce,i,t)=>{
        return acc+ce.salary
    },0)
    console.log(`Employees Total Salary : ${totalSalary}`);

    //5.check salary above

    let above=employees.some((ce)=>{
        return ce.salary > 100000
    })
    console.log(`whether at least one employee has salary above ₹1,00,000 : ${above}`);

    //6.check experience atleast
    let atleast=employees.every((ce)=>{
        return ce.experience >= 1
    })
    console.log(`whether every employee has at least 1 year of experience : ${atleast}`);

    //7.sort employees by salary
    let SortEmp=employees.sort((a,b)=>{
        return b.salary-a.salary
    })
    console.log("Employees by salary from highest to lowest");
    console.log(SortEmp);

    //8.Adding new employee
    console.log("Adding and removing new employee");

    //add last
    employees.push({id: 110,
        name: "Saroja",
        department: "Tech",
        salary: 60000,
        experience: 5,
        skills: ["Service"]
    });
    console.log(employees);

    //remove last
    employees.pop();
    console.log(employees);

    //add first
    employees.unshift({id: 110,
        name: "Saroja",
        department: "Tech",
        salary: 60000,
        experience: 5,
        skills: ["Service"]
    });
    console.log(employees);

    //remove first
    employees.shift();
    console.log(employees);

    //9.Destructuring
    //object
    employees.forEach(({name,department,salary})=>{
        console.log(`${name} - ${salary} - ${department}`); 
    })
    //array
    employees.forEach(({name,skills})=>{
        let[skill1,skill2,skill3]=skills;
        console.log(`Name: ${name}`);
        console.log(`Skill 1: ${skill1}`);
        console.log(`Skill 2: ${skill2}`);
        console.log(`Skill 3: ${skill3}`);
        
    })

    //10.Spread Operator
    let newEmployees=[...employees];
    console.log(newEmployees);

    //11.Rest operator

    function employee(name,...e) {
        console.log(`Name : ${name}`);
        console.log(`Department : ${e[0]}`);
        console.log(`Salary : ${e[1]}`);
        console.log(`Experience : ${e[2]}`);
        console.log(`Skills : ${e[3]}`);
    }

    employee("rocky","CEO",1000000,15,["Java","SQL","JavaScript"])

    //Functions
    function addEmployee(id,name,dept,sal,exp,skills) {
        employees.push({
            id: id,
            name: name,
            department: dept,
            salary: sal,
            experience: exp,
            skills: skills
        });
    }
    addEmployee(110,'vijay','MD',900000,25,["Management","Handling Client","CoMM"]);
    addEmployee(111,'ajith','Director',800000,23,["Management","Handling Client","CoMM"]);
    console.log(employees);

    function deleteEmployee(id) {
        employees.pop();
    }
    deleteEmployee();
    // function deleteEmployeebyid(id) {
    //     let deleteid=employees.find((ce,ind)=>{
    //                 return id === ce.id  
    //     })
    //     let indexDel=employees.indexOf(deleteid);

    //     employees.splice(indexDel,1);
        
    // }
    // deleteEmployeebyid(111);
    console.log(employees);

    function searchEmployeebyId(id) {
        let emp=employees.find((ce,ind)=>{
                    return id === ce.id  
        })
        return emp;
    }
    console.log(searchEmployeebyId(101));

    function CalculateTotalSalary() {
        let totalSalary=employees.reduce((acc,ce,i,t)=>{
            return acc+ce.salary
        },0)
        console.log(`Employees Total Salary : ${totalSalary}`);
        
    }

    CalculateTotalSalary();

function displayAllEmployees() {
    employees.forEach((ce,ind,ta)=>{
        console.log(`EMP ID : ${ce.id}`);
        console.log(`Name : ${ce.name}`);
        console.log(`Department : ${ce.department}`);
        console.log(`Salary : ${ce.salary}`);
        console.log(`Experience : ${ce.experience}`);
        console.log(`Skills : ${ce.skills}`);
    });
}
displayAllEmployees();

    //13.Conditional Statement salary based division
    let juniorEmp=employees.filter((ce)=>{
        return ce.salary>0 && ce.salary<=30000
    }) 
    let midEmp=employees.filter((ce)=>{
        return ce.salary>=30001 && ce.salary<=60000
    })
    let seniorEmp=employees.filter((ce)=>{
        return ce.salary> 60000
    })
    console.log("Junior Employees",juniorEmp);
    console.log("Mid Level Employees",midEmp);
    console.log("Senior Employee",seniorEmp);

    //14.Date

    let joiningdates=[
        new Date(2026, 6, 6),   
        new Date(2026, 6, 8),   
        new Date(2026, 6, 10),  
        new Date(2026, 2, 27),  
        new Date(2026, 3, 17),  
        new Date(2026, 6, 25),  
        new Date(2026, 7, 1),   
        new Date(2026, 7, 5),   
        new Date(2026, 7, 10),  
        new Date(2000, 2, 27)
    ]
    employees.forEach((ce,index)=>{
        ce.joiningDate = joiningdates[index];
    })

    console.log(employees);

    //year
    employees.forEach((ce) => {
        console.log(`${ce.name} - ${ce.joiningDate.getFullYear()}`);
    });
    //month
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"
    ];
    employees.forEach((ce) => {
        console.log(`${ce.name} - ${months[ce.joiningDate.getMonth()]}`);
    });

    //15.user input
    let userId=Number(prompt("Enter Employee Id"));

    let userEmp=employees.find((ce,ind)=>{
        return userId === ce.id  
    })

    console.log(userEmp);

}
{
 //Bonus task
 console.log("Employee Management System");
 let key=Number(prompt(`1.Display All Employees \n2.Add Employee \n3.Search Employee \n4.Filter High Salary Employees \n5.Calculate Total Salary \n6.Sort By Salary \n7.Delete Employee \n8.Exit \n Enter the number function to execute` ));
 
 let employees = [
        {
            id: 101,
            name: "Arun",
            department: "IT",
            salary: 45000,
            experience: 2,
            skills: ["HTML", "CSS", "JavaScript"]
        },
        {
            id: 102,
            name: "Bala",
            department: "Developer",
            salary: 60000,
            experience: 1,
            skills: ["Java","SQL","J2EE"]
        },
        {
            id: 103,
            name: "Kumaran",
            department: "Testing",
            salary: 50000,
            experience: 3,
            skills: ["Java", "SQL", "J2EE"]
        },
        {
            id: 104,
            name: "Vicky",
            department: "Developer",
            salary: 75000,
            experience: 10,
            skills: ["Java","HTML","Spring"]
        },
        {
            id: 105,
            name: "Keerthana",
            department: "Testing",
            salary: 80000,
            experience: 8,
            skills: ["SQL","MySQL","JDBC"]
        },
        {
            id: 106,
            name: "Kishor",
            department: "Developer",
            salary: 40000,
            experience: 0.5,
            skills: ["HTML", "CSS", "Python"]
        },
        {
            id: 107,
            name: "Jeeva",
            department: "Devops",
            salary: 30000,
            experience: 0,
            skills: ["Java","SQL","HTML"]
        },
        {
            id: 108,
            name: "Kavin",
            department: "Testing",
            salary: 90000,
            experience: 7,
            skills: ["C", "C++","embeded"]
        }
        ,
        {
            id: 109,
            name: "Gowtham",
            department: "HR",
            salary: 50000,
            experience: 5,
            skills: ["Hiring", "Data Storing","communication"]
        }
    ];
    
    function displayAllEmployees() {
        employees.forEach((ce,ind,ta)=>{
            console.log(`EMP ID : ${ce.id}`);
            console.log(`Name : ${ce.name}`);
            console.log(`Department : ${ce.department}`);
            console.log(`Salary : ${ce.salary}`);
            console.log(`Experience : ${ce.experience}`);
            console.log(`Skills : ${ce.skills}`);
        });
    }

    function searchEmployeebyId(id) {
        let emp=employees.find((ce)=>{
            return id === ce.id  
        })
        return emp;
    }
    
    function deleteEmployeebyid(id) {
        let deleteid=employees.find((ce,ind)=>{
            return id === ce.id  
        });
        let indexDel=employees.indexOf(deleteid);
        if (indexDel !== -1) {
            employees.splice(indexDel,1);
            console.log("Employee Deleted Successfully");
            
        } else {
            console.log("Employee Not Found");
            
        }
    }




    switch (key) {
        case 1:
            console.log("Display All Employees");
            employees.forEach((ce,ind,ta)=>{
                console.log(`EMP ID : ${ce.id}`);
                console.log(`Name : ${ce.name}`);
                console.log(`Department : ${ce.department}`);
                console.log(`Salary : ${ce.salary}`);
                console.log(`Experience : ${ce.experience}`);
                console.log(`Skills : ${ce.skills}`);
        });
            break;
        case 2:
            console.log("Adding Employee");
            let id=Number(prompt("Enter Employee id ex:201"));
            let name=prompt("Enter Employee Name");
            let dept=prompt("Enter Employee department");
            let sal=Number(prompt("Enter Employee Salary"));
            let exp=Number(prompt("Enter Employee experience in years"));
            let skill=prompt("Enter Employee skills use ,").split(",");
            employees.push(
                {
                id: id,
                name: name,
                department: dept,
                salary: sal,
                experience: exp,
                skills: skill
            });
            displayAllEmployees();
            
            break;
        case 3:
            console.log("Search Employee");
            let id3=Number(prompt("Enter Employee id for Search"));
            console.log(searchEmployeebyId(id3));
            break;
        case 4:
            console.log("filter Higher Salary ");
            let sal4=Number(prompt("Enter Salery Filter high salary"))
            let highSal=employees.filter((ce)=>{   
                return ce.salary>sal4;
            })
            console.log(highSal);
            
            break;
        case 5:
            console.log("Total Salary");
            let totalSal=employees.reduce((acc,ce)=>{
                return acc+ce.salary;
            },0)
            console.log(totalSal);
            break;
        case 6:
            console.log("Sort by Salary");
            let SortEmp=employees.sort((a,b)=>{
                return b.salary-a.salary
            })
            console.log(SortEmp);
            break;
        case 7:
            console.log("Delete Employee by Id");
            let id7=Number(prompt("Enter Id to Delete"));
            deleteEmployeebyid(id7);
            displayAllEmployees();
            break;
        case 8:
            console.log("Thank You and Have a Great Day");
            break;
        
        default:
            console.log("Invalid Number, Press 1 to 8 number for menu function ");
            
            break;
    }   
}