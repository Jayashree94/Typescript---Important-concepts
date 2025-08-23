class Employee{
    readonly _name: string;
    _age:number;

    constructor(name: string, age: number){
        this._name = name;
        this._age = age;
    }
    
    get name(){
        return this._name;
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


const emp:Employee = new Employee("Jays", 30);