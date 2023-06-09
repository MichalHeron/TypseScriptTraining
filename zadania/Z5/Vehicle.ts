import Unit from './Unit'
import Weapon from './Weapon'

class Vehicle extends Unit {
	// private fuelLeft: number
	// private fuelMax: number
	// private fuelConsumtionPerMove: number
	// constructor(){

	// }

	constructor(
		name: string,
		hitPoints: number,
		moveDistance: number,
		weapons: Weapon[],
		private fuelLeft: number,
		private fuelMax: number,
		private fuelConsumtionPerMove: number //skrocona wersja/zapis
	) {
		super(name, hitPoints, moveDistance, weapons)
		// this.fuelMax = fuelMax  //skrocona wersja od razu przypisano jak wyzej
	}
}
