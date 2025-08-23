import { Employee } from "./typeAliases";
let person : Employee[];

person = [
    {employeeDesignamtion:"RE", employeeName:"myname", employeeNumber:454545},
    {employeeDesignamtion:"PE", employeeName:"happy", employeeNumber: 343434}
]

//works with or without void even though, if we mention void easy to understand on the top itslef
function printNames() : void{
    console.log(person[0].employeeDesignamtion);

}

//type for function
function printNames1(empName: string) : void{
    console.log(person[0].employeeDesignamtion);

}

 // parameters
function printNames3(name: string, dob:number, isEligible:boolean){

}

// default values
function printNames4(name: string = 'default name', dob:number, isEligible:boolean){
    
}

printNames1('Jays');
printNames4(undefined,3424,true)