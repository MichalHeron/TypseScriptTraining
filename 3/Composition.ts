{
	interface Email {
		name: string
		domain: string
	}
	//budowanie klas/interfaceow z innych interajcow - kompozycja

	interface Person {
		name: string
		age: number
		email: Email
	}
}
