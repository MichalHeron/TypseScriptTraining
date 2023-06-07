{
	//uknown podobna jest do any, ale jezeli chcemy wykorzystac tą zmienną przypisujac ja dalej lub wywolujac na przyklad jakas metode to TS nam na to nie pozwoli dopoki nie wykonaymy sprawdzenia typeof
	let xx: unknown

	xx = 'Pawel'
	xx = 3
	xx = {}
	xx = () => {}

	if (typeof xx === 'number') {
		let xage: number = xx
	}

	// sprawdzamy czy xx jest obiektem. dalej musimy sprawdzic czy jest rozne od null-a (bo byla taka mozliwosc). dalej czy xx.age istnieje w ogole, ale musimy zrzutowac (wymusic ts, przypisac xx jako obiekt ktory posiada age jako number)
	if (typeof xx === 'object' && xx !== null) {
		if ((xx as { age: number }).age !== undefined) {
			;(xx as { age: number }).age
		}
	}

	if (typeof xx === 'function') {
		xx()
	}
}
