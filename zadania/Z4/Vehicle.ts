import Unit from './Unit'

interface Vehicle extends Unit {
	fuelLeft: number
	fuelMax: number
	fuelConsumtionPerMove: number
}