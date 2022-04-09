import Car from './car.js';
import ParkingLot from './parkingLot.js';

const car = new Car('ABC-123', 'WHITE');
const car2 = new Car('GHJ-355', 'BLACK');
const car3 = new Car('GHJ-356', 'BLACK');
const parkingLot = new ParkingLot();

// console.log(car);
console.log(parkingLot.create(4));
console.log(parkingLot.parkCar(car));
console.log(parkingLot.parkCar(car2));
console.log(parkingLot.parkCar(car3));
// console.log(parkingLot);
console.log(parkingLot.getRegistrationNumbersByColor('Red'));
console.log(parkingLot.getRegistrationNumbersByColor('Black'));
console.log(parkingLot.getRegistrationNumbersByColor('White'));

console.log(parkingLot.getTicketNumberByRegistrationNumber('ABC-123'));
console.log(parkingLot.getTicketNumberByRegistrationNumber('rry-531'));
