import { Employee } from "./typeAliases";
let employees : any[] =[
    {empName:"heeeloo", empNbr: 98798, empAddr:"Delhi"}
]

//let newEmployee = employees
let newEmployee = employees as Employee[];

console.log(newEmployee[0].employeeDesignamtion);
//console.log(newEmployee[1].gender);

