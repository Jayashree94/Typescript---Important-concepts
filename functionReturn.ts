import { Employee } from "./typeAliases";
let officeEmp :Employee ={employeeDesignamtion:"HR", employeeNumber:4443, employeeName:"GGG"}

function getfullDets(employeeDesignamtion: string, employeeName:string| undefined) : string{
    const fullDets = employeeDesignamtion + ' ' + employeeName;
    return fullDets;

}

getfullDets(officeEmp.employeeDesignamtion, officeEmp.employeeName);


//if void is given and return -> error
//if return type given and did not return value -> error