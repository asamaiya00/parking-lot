export default class ParkingLot {
  size = 0;
  spots = [];

  constructor(number) {
    if (number) console.log(this.create(number));
  }

  create(number) {
    if (number <= 0) {
      return 'Enter positive number';
    }
    this.size = number;

    for (var i = 0; i < number; i++) {
      this.spots.push('empty');
    }
    return `Created parking lot with ${number} spots`;
  }
}
