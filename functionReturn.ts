import { Employee } from "./typeAliases";
let officeEmp :Employee ={employeeDesignamtion:"HR", employeeNumber:4443, employeeName:"GGG"}

//function getfullDets(employeeDesignamtion: string, employeeName:string| undefined) : string{
function getfullDets(employeeDesignamtion: string, employeeName:string) : string{

    const fullDets = employeeDesignamtion + ' ' + employeeName;
    return fullDets;

}

function getfullDets1(officeEmp :Employee){
      const fullDets = officeEmp.employeeDesignamtion + ' ' + officeEmp.employeeName;
    return fullDets;

}


//typecast
const result = getfullDets(officeEmp.employeeDesignamtion, officeEmp.employeeName as string);
const result1 = getfullDets1(officeEmp);


//if we get employeeName as null -> no error it will automatically move null -> convert null > "null"

//if void is given and return -> error
//if return type given and did not return value -> error

console.log(result)


//Rest parameter

function test(...name: string[]){
    console.log(name)
};


test("sdafa","afdsfdsf","asfdf")



// function abc(input : string) : string{       -> return
//    return string
//}


// function abc(input : Employee) : Employee{       -> return
//    return input
//}

//const result: Employee = abc(input)
//console.log(result);