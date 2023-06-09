"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Unit_1 = __importDefault(require("./Unit"));
class Vehicle extends Unit_1.default {
    // private fuelLeft: number
    // private fuelMax: number
    // private fuelConsumtionPerMove: number
    // constructor(){
    // }
    constructor(name, hitPoints, moveDistance, weapons, fuelLeft, fuelMax, fuelConsumtionPerMove //skrocona wersja/zapis
    ) {
        super(name, hitPoints, moveDistance, weapons);
        this.fuelLeft = fuelLeft;
        this.fuelMax = fuelMax;
        this.fuelConsumtionPerMove = fuelConsumtionPerMove;
        // this.fuelMax = fuelMax  //skrocona wersja od razu przypisano jak wyzej
    }
}
