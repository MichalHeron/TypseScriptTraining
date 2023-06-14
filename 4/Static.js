"use strict";
{
    class Person {
        constructor(name, email) {
            this.toString = () => {
                return `${Person.firstName} ${this.email.toString()}`;
            };
            Person.firstName = name;
            this.email = email;
        }
    }
    //static ma byc zawsze po public,private itp
    Person.info = 'Text';
    const person = new Person('a', new Email('a', 'b'));
    // person.info
    Person.info;
}
//W JavaScript często spotkacie się z metodami statycznymi. Istnieją one w każdej klasie jak Number, Object, Array. Cała klasa Math do operacji matematycznych jest zbudowana z metod i pól statycznych. Również w klasie Date znajdziemy wiele statycznych metod.
/*Co warto zapamiętać
metody i pola statyczne istnieją w klasie, a nie w jej prototypie

właściwości statyczne wywołujemy przez odwołanie się do nazwy klasy

nie możemy odwołać się do właściwości statycznych przez instancję obiektu

metody i pola statyczne nie mają dostępu do instancji obiektu w środku klasy, this wskazuje na klasę nie na instancję obiektu

właściwości statyczne są dobre do tworzenia stałych wartości, klas narzędziowych, parserów, formaterów, kawałków kodów, które regularnie używamy w różnych częściach aplikacji*/
