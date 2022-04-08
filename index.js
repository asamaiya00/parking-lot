import Car from './car.js';
import ParkingLot from './parkingLot.js';

const car = new Car('ABC-123', 'white');
const parkingLot = new ParkingLot();
const parkingLot2 = new ParkingLot(10);

console.log(car);
console.log(parkingLot.create(4));
console.log(parkingLot);
console.log(parkingLot2);
