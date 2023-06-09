class Email {
    
    name: string;
    domain: string;
//trzeba na samym poczatku zdefiniowac typy zmiennych wykorzystywanych w clasie

    constructor(name: string, domain: string) {
        this.name = name;
        this.domain = domain;
        //zawsze uzywamy this odnoszac sie do pol klasy
    }

    toString = () : string => {
        return `${this.name}@${this.domain}`
    }

}

class Person {

    firstName: string;
    email: Email;

    constructor(name : string, email : Email) {
        this.firstName = name;
        this.email = email;
    }

    toString = () => {
        return `${this.firstName} ${this.email.toString()}`;
    }
}

const pawel = new Person("Pawel", new Email("pawel", "kurstypescripta.pl"));
console.log(pawel.toString());