"use strict";
class Email {
    //trzeba na samym poczatku zdefiniowac typy zmiennych wykorzystywanych w clasie
    constructor(name, domain) {
        this.toString = () => {
            return `${this.name}@${this.domain}`;
        };
        this.name = name;
        this.domain = domain;
        //zawsze uzywamy this odnoszac sie do pol klasy
    }
}
class Person {
    constructor(name, email) {
        this.toString = () => {
            return `${this.firstName} ${this.email.toString()}`;
        };
        this.firstName = name;
        this.email = email;
    }
}
const pawel = new Person("Pawel", new Email("pawel", "kurstypescripta.pl"));
console.log(pawel.toString());
