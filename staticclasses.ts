//static - access with the help of class only
//global 

class Employee1{
    //static readonly _name: string;
    static _name : string;
    _age:number;

    constructor(name: string, age: number){
    //    this._name = name;
    Employee1._name = name;
        this._age = age;
    }
    
    get name(){
    //    return this._name;

    return Employee1._name;
    }

    //set name(value:string){                 -> cannot assign value since it is a readonly property
    //    this._name = value;
    //}

    
    get age(){
        return this._age
    }

    set age(value:number){
        this._age =value;

    }

    printName(){
        console.log(this.name)
    }
}


const emp1:Employee1 = new Employee1("Jays", 30);