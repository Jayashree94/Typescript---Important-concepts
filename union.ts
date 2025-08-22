//mutiple data type merge

type studentDetails = {studentName:String; studentNumber:Number; studentAge: Number};

let student: studentDetails[] | null= [
{studentName:"Benny", studentNumber:445345, studentAge:5},
{studentName:"Gabby", studentNumber:454546, studentAge:5},
]

let student1:studentDetails[] | null = null;