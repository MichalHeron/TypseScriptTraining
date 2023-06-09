"use strict";
{
    class Shape {
    } //interesuje mnie tylko to zeby clasa potomna miala metode area ktora zwraca liczbe 
    // klasy abstrakcyjne - nie mozna utworzyc obiektu na podstawie klasy abstrakycjnej,
    // protected maja dostep tylko klasy ktore posiadaja ta zmienna oraz wszystkie klasy ktore dziedzicza po tej klasie - nie wywolamy jej w swiecie zewnetrznym
    class Rectangle extends Shape {
        constructor(a, b) {
            super();
            this.area = () => {
                //wszystkie abstrakcyjne metody ktore beda implementowane musza byc publiczne, sygnatury musza sie zgadza (w tym przypadku zwraca number)
                return this.a * this.b;
            };
            this.a = a;
            this.b = b;
        }
    }
    class Square extends Rectangle {
        constructor(a) {
            super(a, a);
            this.area = () => {
                return this.a * this.a;
            };
            this.toStr = () => {
                return `Jestem kwadratem o boku ${super.area()}`;
            };
        }
    }
    class Circle extends Shape {
        constructor(r) {
            super();
            this.area = () => {
                return this.radius * this.radius * Math.PI;
            };
            this.radius = r;
        }
    }
    const cos = new Circle(5);
    cos.area();
    const something = new Square(10);
    something.area();
    const prostokat = new Square(5); // polimorfizm - wskaz metode area nie z rectangle (obiekt wskazuje na abstrakcje wyzszego rzedu (shape lub na przyklad rectangle)) tylko z clasy na ktora faktycznie wskazuje czyli Square
    prostokat.area();
    // prostokat.toStr() // c.d. polimorfizm - nie mozemy wywolac tego mimo tego ze zmienna wskazuje na kwadrat 
    // to jakie metody moga byc wywolane zalezy od typu na jaki wskazuje zmienna (w rectangle nie ma metody toStr)
}
