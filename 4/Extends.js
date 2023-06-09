"use strict";
{
    class Rectangle {
        constructor(a, b) {
            this.area = () => {
                return this.a * this.b;
            };
            this.a = a;
            this.b = b;
        }
    }
    class Square extends Rectangle {
        //rozszerza clase prostokat
        constructor(a) {
            super(a, a); // super odnosi sie do rodzica
            this.toString = () => {
                return 'Jestem kwadratem';
            };
        }
    }
    let prostokat = new Rectangle(10, 5);
    let kwadrat = new Square(5);
    console.log(prostokat.area());
    console.log(kwadrat.area());
    console.log(kwadrat.toString());
}
