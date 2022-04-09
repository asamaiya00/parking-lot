export default class Car {
  constructor(registrationNumber, color) {
    this.registrationNumber = registrationNumber.toUpperCase();
    this.color = color.toUpperCase();
  }
}
