//musimy dodac typ zmiennych pktore funkcja przyjmuje/oczekuje. nastepnie podajemy jaki typ powinna zwrocic funkcja
function sum(a: number, b: number): number {
	return a + b
}

const suma = (a: number, b: number) => a + b

let s = sum(2, 3) // zmienna "s" na podstawie tego co zwraca funkcja (ze zdeklarowlaismy ze ma byc number), TS wydedukuje i przypisze do tej zmiennej takze number
