class Person {
    name;
    age;

    constructor(n, a) {
        this.name = n;
    } 

    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}

const bob = new Person("Bobby", 42);
const john = new Person("Johnny", 42);

console.log(typeof bob);
console.log(bob.name);

bob.sayHello();
john.sayHello();



let a = "21";
let b = 21;

let  c = a + b;
console.log(c);
