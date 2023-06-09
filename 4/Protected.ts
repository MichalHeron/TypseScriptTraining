{
	abstract class Shape {
		abstract area: () => number
	}//interesuje mnie tylko to zeby clasa potomna miala metode area ktora zwraca liczbe 

	// klasy abstrakcyjne - nie mozna utworzyc obiektu na podstawie klasy abstrakycjnej,

	// protected maja dostep tylko klasy ktore posiadaja ta zmienna oraz wszystkie klasy ktore dziedzicza po tej klasie - nie wywolamy jej w swiecie zewnetrznym

	class Rectangle extends Shape {
		protected a: number
		private b: number

		constructor(a: number, b: number) {
			super()
			this.a = a
			this.b = b
		}

		public area = (): number => {
			//wszystkie abstrakcyjne metody ktore beda implementowane musza byc publiczne, sygnatury musza sie zgadza (w tym przypadku zwraca number)
			return this.a * this.b
		}
	}

	class Square extends Rectangle {
		constructor(a: number) {
			super(a, a)
		}

		public area = (): number => {
			return this.a * this.a
		}

		public toStr = (): string => {
			return `Jestem kwadratem o boku ${super.area()}`
		}
	}

	class Circle extends Shape {
		radius: number

		constructor(r: number) {
			super()
			this.radius = r
		}

		public area = (): number => {
			return this.radius * this.radius * Math.PI
		}
	}

	const cos: Shape = new Circle(5)
	cos.area()
	const something: Shape = new Square(10)
	something.area()

	const prostokat: Rectangle = new Square(5) // polimorfizm - wskaz metode area nie z rectangle (obiekt wskazuje na abstrakcje wyzszego rzedu (shape lub na przyklad rectangle)) tylko z clasy na ktora faktycznie wskazuje czyli Square
	prostokat.area()

    // prostokat.toStr() // c.d. polimorfizm - nie mozemy wywolac tego mimo tego ze zmienna wskazuje na kwadrat 
    // to jakie metody moga byc wywolane zalezy od typu na jaki wskazuje zmienna (w rectangle nie ma metody toStr)
}
