"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Unit_1 = __importDefault(require("./Unit"));
class Infantry extends Unit_1.default {
    constructor(name, hitPoints, moveDistance, weapons) {
        super(name, hitPoints, moveDistance, weapons);
    }
}
