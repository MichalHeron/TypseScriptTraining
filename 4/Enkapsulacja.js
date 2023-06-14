"use strict";
{
    //inaczej hermetyzacja
    // jedna z podstawowych zasad programowania obiektowego - jak najmniej danych o danym obiekcie wystawiac na zewnatrz (np. do odcytu, modyfikacji)
    // lepiej domyslnie ustawiac na private, akiedy bedzie potrzbea zostawiac na public
    class Email {
        constructor(name, domain) {
            this.toString = () => {
                return `${this.name}@${this.domain}`;
            };
            this.name = name;
            this.domain = domain;
        }
    }
    class Person {
        constructor(name, email) {
            this.toString = () => {
                return `${this.firstName} ${this.email.toString()}`;
            };
            this.firstName = name;
            this.email = email;
            this.preferences = [];
        }
        setEmail(email) {
            this.email = email;
        }
        // ustawiamy metode publiczna zeby dac sobie mozliwosc tylko odczytu/zapisu maila bez mozliwosci zapisu/odczytu (jedno z tych dwoch) (public umozliwa odczyt i edycje, private blokuje oba)
        //dobrą praktyka jest stosowanie setter&getter do odczytu i zapisu zeby wygodniej odczytywac lub zapisywac bo robiac po kropce po protu zmienna to moze pokazac cos innego bo inna klasa tez moze posadac taka zmienna
        getEmail() {
            console.log(`Email filed was read`);
            return this.email;
        }
        getPreferences() {
            return Object.assign([], this.preferences);
            // return this.preferences // w ten sposob narazamy sie na mozliwosc zmiany z zewnatrz
        } // zwracamy kopie tablicy zeby nie mozna bylo wykonac na oryginalnyen tablicy metod tablicowych
        addPreference(pref) {
            this.preferences.push(pref);
            return this.preferences;
        }
    }
    const email = new Email('pawel', 'kurstypescripta.pl');
    const pawel = new Person('Pawel', email);
    console.log(pawel.getEmail());
    // const x = pawel.getPreferences();
    // x.sort
}
