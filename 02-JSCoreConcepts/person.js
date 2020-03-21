class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    nsFull() {
        return (`${this.name} ${this.surname.toUpperCase()}`);
    }

    nsInitials() {
        let initialName = this.name.charAt(0);
        let initialSurname = this.surname.charAt(0);
        return (`${initialName}.${initialSurname}.`);
    }
}

person1 = new Person('Jan', 'Nowak');
person2 = new Person('Bartek', 'Podgórni');

console.log(person2.nsFull(), person2.nsInitials());
console.log(person1.nsFull(), person1.nsInitials());