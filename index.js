import Car from './src/models/car.js';
import ParkingLot from './src/models/parkingLot.js';

const car = new Car('ABC-123', 'whIte');
const car2 = new Car('GHJ-355', 'red');
const car3 = new Car('GHJ-356', 'WHITE');
const car4 = new Car('RTA-353', 'white');
const car5 = new Car('JUT-351', 'black');
const car6 = new Car('FIS-356', 'BLACK');
const parkingLot = new ParkingLot();

// - create a parking lot
console.log(parkingLot.create(4));

// - park cars in it
console.log(parkingLot.parkCar(car));
console.log(parkingLot.parkCar(car2));
console.log(parkingLot.parkCar(car3));
console.log(parkingLot.parkCar(car4));
console.log(parkingLot.parkCar(car5));
console.log(parkingLot.parkCar(car6));
console.log();

// Registration numbers of all cars of a particular Color.
console.log(parkingLot.getRegistrationNumbersByColor('purple'));
console.log(parkingLot.getRegistrationNumbersByColor('Black'));
console.log(parkingLot.getRegistrationNumbersByColor('WHITE'));
console.log();

// Ticket number in which a car with a given registration number is placed.
console.log(parkingLot.getTicketNumberByRegistrationNumber('ABC-123'));
console.log(parkingLot.getTicketNumberByRegistrationNumber('rry-531'));
console.log();

// Ticket numbers of all ticket where a car of a particular color is placed.
console.log(parkingLot.getTicketNumbersByColor('white'));
console.log(parkingLot.getTicketNumbersByColor('purple'));
console.log(parkingLot.getTicketNumbersByColor('black'));
