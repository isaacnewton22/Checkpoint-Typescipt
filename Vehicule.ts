interface vehicule{
    make: string;
    model: string;
    year: number;
    start: () => void;
}

class Car implements vehicule {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start = (): void => {
        console.log(`La ${this.make} ${this.model} demarre`)
    }
}

const Ford = new Car('Ford', 'F150', 2024);

Ford.start(); // Le moteur de la voiture a demarrer