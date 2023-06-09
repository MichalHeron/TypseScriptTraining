import Unit from './Unit'
import Weapon from './Weapon'

class Infantry extends Unit {
	constructor(name: string, hitPoints: number, moveDistance: number, weapons: Weapon[]) {
		super(name, hitPoints, moveDistance, weapons)
	}
}
