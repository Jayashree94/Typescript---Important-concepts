interface School {
    noOfStudents: number;
    readonly schoolName: string;
    isOpen: Boolean;
    getname():string;
}

const schooldetails: School ={
    noOfStudents:500,
    schoolName:"Sankara",
    isOpen:true,
    getname() {
        return this.schoolName
    },
}


class KinderGardern implements School { 
    noOfStudents: 500;
    schoolName: "Sri Niketan"
    isOpen: true;
    getname():string {
    return this.schoolName;
    }
}

const kg = new KinderGardern();
console.log(kg);


class senior{

}

console.log(schooldetails);