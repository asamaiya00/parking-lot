import Car from './car';

test('create car', () => {
  const car = new Car('Abc-123', 'black');
  expect(car.color).toBe('BLACK');
  expect(car.registrationNumber).toBe('ABC-123');
});
