const monSymbol = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [monSymbol]() {
    return new this.constructor();
  }

  cloneCar() {
    return this[monSymbol]();
  }
}
