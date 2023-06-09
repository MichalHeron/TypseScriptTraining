"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Unit {
    constructor(name, hitPoints, moveDistance, weapons) {
        this.name = name;
        this.hitPointsLeft = hitPoints;
        this.hitPointsMax = hitPoints;
        this.moveDistance = moveDistance;
        this.weapons = weapons;
    }
}
exports.default = Unit;
