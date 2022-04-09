import ParkingLot from './parkingLot';
import Car from './car';

test('create parking lot', () => {
  const parkingLot = new ParkingLot(10);
  const parkingLot2 = new ParkingLot(-2);
  console.log(parkingLot.create(4));
  expect(parkingLot.spots.length).toBe(10);
  expect(parkingLot2.spots.length).toBe(0);
});

const parkingLot = new ParkingLot(4);
const car = new Car('ABC-123', 'WHITE');
const car2 = new Car('GHJ-355', 'BLACK');
const car3 = new Car('GHJ-356', 'BLACK');

test('park car in lot', () => {
  const parkingLot = new ParkingLot(1);
  let stmt = parkingLot.parkCar(car);
  expect(stmt).toBe('Car ABC-123 parked at spot 1');
  stmt = parkingLot.parkCar(car);
  expect(stmt).toBe('Car ABC-123 is already parked at spot 1');
  stmt = parkingLot.parkCar(car2);
  expect(stmt).toBe('Parking lot is full');
});

test('get registration number by color', () => {
  parkingLot.parkCar(car);
  parkingLot.parkCar(car2);
  parkingLot.parkCar(car3);
  expect(parkingLot.getRegistrationNumbersByColor('black')).toHaveLength(2);
  expect(parkingLot.getRegistrationNumbersByColor('purple')).toHaveLength(0);
});

test('get ticket number by registration number', () => {
  parkingLot.parkCar(car);
  expect(parkingLot.getTicketNumberByRegistrationNumber('abc-123')).toBe(1);
  expect(parkingLot.getTicketNumberByRegistrationNumber('invalid')).toBe(0);
});

test('get ticket number by color', () => {
  parkingLot.parkCar(car);
  parkingLot.parkCar(car2);
  parkingLot.parkCar(car3);
  expect(parkingLot.getTicketNumbersByColor('black')).toHaveLength(2);
  expect(parkingLot.getTicketNumbersByColor('purple')).toHaveLength(0);
});
