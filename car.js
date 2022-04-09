export default class Car {
  ticketNumber = null;
  constructor(registrationNumber, color) {
    this.registrationNumber = registrationNumber.toUpperCase();
    this.color = color.toUpperCase();
  }
}
