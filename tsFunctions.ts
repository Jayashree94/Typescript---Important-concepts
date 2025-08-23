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

//arguements & parameters
function printNames1(empName: string) : void{
    console.log(person[0].employeeDesignamtion);

}

printNames1("yolo");

 // parameters
function printNames3(name: string, dob:number, isEligible:boolean){

}

// default values
function printNames4(name: string = 'default name', dob:number, isEligible:boolean){
    
}

//optional - after optional should not have mandatory parms

function printNames5(name: string = 'default name', dob?:number, isEligible:boolean){
    
}

//optional at the end 

function printNames6(name: string = 'default name', dob?:number, isEligible?:boolean){
    
}

printNames1('Jays');
printNames4(undefined,3424,true)