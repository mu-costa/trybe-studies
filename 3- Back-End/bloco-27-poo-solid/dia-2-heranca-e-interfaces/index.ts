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
        this._examsGrades.push(grade);
    }

    set addWorkGrade ( grade: number) {
        this._worksGrades.push(grade);
    }
}

