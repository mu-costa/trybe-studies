class Person {
    public _name:string;
    private _birthDate: Date = new Date();

    constructor(name: string, birthDate: Date) {
        this._name = name;
        this.birthDateValidation(birthDate);
    }

    birthDateValidation (birthDate: Date) {
        const dateNow = new Date().getTime();
        const actualYear = new Date().getFullYear();
        const time = birthDate.getTime();
        const birthDateYear = birthDate.getFullYear();
        const yearDiff = actualYear - birthDateYear;
        if((time < dateNow) && (yearDiff <= 120)) this._birthDate = birthDate;
    }

    set name (name: string) {
        if(name.length >= 3) this._name = name;
    }

    get birthDate (){
        return this._birthDate;
    }
}

const person1 = new Person('Murilo', new Date("1901-08-10"));
const person2 = new Person('Gil', new Date('2005-06-09'));

class Student extends Person {
    private _enrollment: string;
    private _examsGrades: number[];
    private _worksGrades: number[];

    constructor(name: string, birthDate: Date){
        super(name, birthDate);
        this._enrollment = this.generateEnrollment();
        this._examsGrades = [];
        this._worksGrades = [];
    }

    get enrollment () { return this._enrollment };
    get examsGrades () { return [...this._examsGrades]};
    get worksGrades () { return [...this._worksGrades]};

    sumGrades() : number {
        let sumNotes = 0;
        this._examsGrades.forEach((note) => sumNotes += note);
        return sumNotes;
    }
    
    sumGradeAverage() : number {
        let average = (this.sumGrades()) / this._examsGrades.length;
        return average;
    }

    generateEnrollment() : string {
        return `${Math.random() * 100 + 1}`;
    }

    set addExamGrade ( grade: number) {
        if(this._examsGrades.length <= 4) this._examsGrades.push(grade);    
    }

    set addWorkGrade ( grade: number) {
        if(this._worksGrades.length <= 2) this._worksGrades.push(grade);
    }

    set enrollment ( enrollment: string) {
        if(enrollment.length >= 16 )this._enrollment = enrollment;
    }
}

interface Employee {
    registration: number;
    salary: number;
    admissionDate : string;
    generateRegistration () : string;
}

class Subject {
    _name: string;

    constructor (name: string) {
        this._name = name;
    }

    get name () { return this._name };
    set changeName (name: string) {
        if(name.length >= 3) this._name = name;
    }


}

class Teacher extends Person implements Employee{
    private _registration: number;
    private _salary: number;
    private _admissionDate : string;
    private _subject : string;

    constructor(name:string, birthDate: Date, salary: number, subject: string )  {
        super(name, birthDate)
        this._salary = salary;
        this._subject = subject;
    }

    get registration () { return this._registration };
    get salary () { return this._salary };
    get admissionDate () { return this._admissionDate };
    get subject () { return this._subject };

    generateRegistration(): string {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < 17; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

         return result;
    }

    set changeSalary ( salary : number) {
        if(salary >= 0 ) this._salary = salary;
    }
}