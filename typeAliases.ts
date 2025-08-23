let employeeDetails1 : {employeeName:string; employeeNumber:number; employeeDesignamtion: string}[] = [
    {employeeName:"jaya", employeeNumber:454353454, employeeDesignamtion:"SE"},
    {employeeName:"ruba", employeeNumber:4535355, employeeDesignamtion:"SRE"},
    {employeeName:"heloo", employeeNumber:5434534534, employeeDesignamtion:"RRR"}
]

let employeeDetails2 : any[] = [
    {employeeName:"jaya", employeeNumber:"454353454", employeeDesignamtion:"SE"},
    {employeeName:"ruba", employeeNumber:4535355, employeeDesignamtion:true},
    {employeeName:"heloo", employeeNumber:5434534534, employeeDesignamtion:"RRR"}
]

// type Aliases 

export type Employee = {employeeName?:string; employeeNumber:number; employeeDesignamtion: string};
let emp : Employee[] 