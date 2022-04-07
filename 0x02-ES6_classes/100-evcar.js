import Car from './10-car';

export default class EVCar extends Car {
    static get [Symbol.species]() {
	return Car;
    }

    constructor(brand, motor, color, range) {
	super(brand, motor, color);
	this._range = range;
    }

    cloneCar() {
	const Carclone = this.constructor[Symbol.species] || this.constructor;
	const carObj = new Carclone();
	return carObj;
    }
}
