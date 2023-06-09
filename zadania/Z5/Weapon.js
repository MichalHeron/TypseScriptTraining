"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Weapon {
    constructor(name, damage, ammo, rateOfFire, range) {
        this.name = name;
        this.damage = damage;
        this.ammoMax = ammo;
        this.ammoLeft = ammo;
        this.rateOfFire = rateOfFire;
        this.range = range;
    }
}
exports.default = Weapon;
