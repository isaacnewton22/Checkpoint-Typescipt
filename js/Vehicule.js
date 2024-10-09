"use strict";
class Car {
    constructor(make, model, year) {
        this.start = () => {
            console.log(`La ${this.make} ${this.model} demarre`);
        };
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
const Ford = new Car('Ford', 'F150', 2024);
Ford.start(); // Le moteur de la voiture a demarrer
