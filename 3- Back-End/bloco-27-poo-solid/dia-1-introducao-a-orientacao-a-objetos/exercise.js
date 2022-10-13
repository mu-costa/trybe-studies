var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.saysHello = function () {
        console.log('Hi');
    };
    return Student;
}());
var student1 = new Student();
student1.saysHello();
