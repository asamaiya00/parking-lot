export default class ParkingLot {
  currentSize = 0;
  spots = [];
  regNumberTicketNumberMap = new Map();
  colorRegNumbersMap = new Map();

  constructor(number) {
    if (number) console.log(this.create(number));
  }

  create(number) {
    if (this.spots.length) return 'Parking Lot already created';

    if (number <= 0) return 'Spots to be created should be at least 1';

    for (var i = 0; i < number; i++) {
      this.spots.push('empty');
    }
    return `Created parking lot with ${number} spots`;
  }

  parkCar(car) {
    if (this.regNumberTicketNumberMap[car.registrationNumber])
      return `Car ${car.registrationNumber} is already parked at spot ${
        this.regNumberTicketNumberMap[car.registrationNumber]
      }`;

    if (this.currentSize === this.spots.length) {
      return 'Parking lot is full';
    }
    const spot = this.getNearestEmptySpot();

    this.spots[spot] = car;
    car.ticketNumber = spot + 1;
    this.regNumberTicketNumberMap[car.registrationNumber] = spot + 1;
    this.currentSize++;
    // console.log(this.spots);
    const color = car.color.toUpperCase();
    if (this.colorRegNumbersMap[color]) {
      this.colorRegNumbersMap[color].push(car.registrationNumber);
    } else this.colorRegNumbersMap[color] = [car.registrationNumber];

    console.log(car);
    return `Car ${car.registrationNumber} parked at spot ${spot + 1}`;
  }

  getNearestEmptySpot() {
    return this.spots.indexOf('empty');
  }

  getRegistrationNumbersByColor(color) {
    return this.colorRegNumbersMap[color.toUpperCase()] || [];
  }
}
