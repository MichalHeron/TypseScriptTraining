{
	let age: number

	let someVar: string | number

	//wartosci jako typy
	let dice: 1 | 2 | 3 | 4 | 5 | 6

	dice = 5

	let mismasz: 'x' | true | 1 | 2 | 1000 | number[]

	const youWillNotBeAbleToChangeMe = 'dom'
	let dontChangeMe: 'dom' = 'dom'

	let flagIsSet: boolean = true
	let anotherFlag: true | false = false

	flagIsSet = anotherFlag
	anotherFlag = flagIsSet // mozemy tak zrobic bo oba te zbiory typow sa takie same

	let name: 'Pawel' | 'Dawid' | 'Gabriel' = 'Pawel'
	let text: string

	text = name
	// name = text; //takie przypisanie nie bedzie mozliwe kazdy name to text(string) ale nie kazdy string to zbiory z name
}
