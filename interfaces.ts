//type and interface almoset similar


interface School {
    noOfStudents: number;
    readonly schoolName: string;
    isOpen: Boolean;
    getname():string | number
}

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


interface HigherSec extends School{
    getSeniorsSrudents():number;
}


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