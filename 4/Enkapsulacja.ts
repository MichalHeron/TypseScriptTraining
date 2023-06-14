{
	//inaczej hermetyzacja
	// jedna z podstawowych zasad programowania obiektowego - jak najmniej danych o danym obiekcie wystawiac na zewnatrz (np. do odcytu, modyfikacji)
	// lepiej domyslnie ustawiac na private, akiedy bedzie potrzbea zostawiac na public
	class Email {
		private name: string
		private domain: string

		constructor(name: string, domain: string) {
			this.name = name
			this.domain = domain
		}

		public toString = (): string => {
			return `${this.name}@${this.domain}`
		}
	}

	class Person {
		private firstName: string
		private email: Email
		private preferences: string[]

		constructor(name: string, email: Email) {
			this.firstName = name
			this.email = email
			this.preferences = []
		}

		public toString = () => {
			return `${this.firstName} ${this.email.toString()}`
		}

		public setEmail(email: Email): void {
			this.email = email
		}
		// ustawiamy metode publiczna zeby dac sobie mozliwosc tylko odczytu/zapisu maila bez mozliwosci zapisu/odczytu (jedno z tych dwoch) (public umozliwa odczyt i edycje, private blokuje oba)
		//dobrą praktyka jest stosowanie setter&getter do odczytu i zapisu zeby wygodniej odczytywac lub zapisywac bo robiac po kropce po protu zmienna to moze pokazac cos innego bo inna klasa tez moze posadac taka zmienna

		public getEmail(): Email {
			console.log(`Email filed was read`)
			return this.email
		}

		public getPreferences(): string[] {
			return Object.assign([], this.preferences)
			// return this.preferences // w ten sposob narazamy sie na mozliwosc zmiany z zewnatrz
		} // zwracamy kopie tablicy zeby nie mozna bylo wykonac na oryginalnyen tablicy metod tablicowych

		public addPreference(pref: string): string[] {
			this.preferences.push(pref)
			return this.preferences
		}
	}

	const email: Email = new Email('pawel', 'kurstypescripta.pl')

	const pawel = new Person('Pawel', email)
	console.log(pawel.getEmail())

	// const x = pawel.getPreferences();
	// x.sort
}
