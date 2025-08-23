//mutiple data type merge

type studentDetails = {studentName:String; studentNumber:Number; studentAge: Number};

let student: studentDetails[] | null= [
{studentName:"Benny", studentNumber:445345, studentAge:5},
{studentName:"Gabby", studentNumber:454546, studentAge:5},
]

let student1:studentDetails[] | null = null;


export type adhardetails ={
    adharnumber: number ;
    adharName:string;
    adharPh: number;
    adharsec : number | null | undefined;
}

let myAdhar : adhardetails ={
    adharnumber:453453,
    adharName:"Shree",
    adharPh:34534543,
    adharsec:null
}