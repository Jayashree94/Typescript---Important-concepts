//type and interface almost similar - 
// diff -> type -> cannot be inherited/implemented
//                  cannot have additional properties in object apart ftom type defined
//class implements interface => can have additional properties in class apart from interface defined
//interface inhertance


interface School {
    noOfStudents: number;
    readonly schoolName: string;
    isOpen: Boolean;
    getname():string | number
}

//type

const schooldetails: School ={
    noOfStudents:500,
    schoolName:"Sankara",
    isOpen:true,
    getname() {
        return this.schoolName
    },
   // getname1(): string {                       cannot add additional methods in onject in case of just type inerface
   //     return this.schoolName;
   // }
   
}

//interface implements

class KinderGardern implements School { 
    noOfStudents: 500;
    schoolName: "Sri Niketan"
    isOpen: true;
    getname():string {
    return this.schoolName;
    }
     getname1(): string {
        return this.schoolName                       // can give additional methods also in case of interface implements
    }
}

const kg = new KinderGardern();
console.log(kg);

//////////////////////////////////////////

//inheritance -> current plus parent porperties

interface HigherSec extends School{
    getSeniorsSrudents():number;
}


//senior student get properties of highersec and also school

class seniorStudent implements HigherSec {   
    noOfStudents=500;
    schoolName="Sankara";
    isOpen=true;
    getname() {
        return this.schoolName
    };
    getSeniorsSrudents(): number {
        return 100;
    }
}