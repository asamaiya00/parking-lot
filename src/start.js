import Car from './models/car.js';
import ParkingLot from './models/parkingLot.js';
import inquirer from 'inquirer';

const parkingLotTest = new ParkingLot();

do {
  const { choice } = await inquirer.prompt({
    name: 'choice',
    type: 'list',
    message: 'Choose query...',
    choices: [
      'Create a parking lot',
      'Park Car',
      'All Registration Numbers by Color',
      'Ticket Number by Registration Number',
      'All Ticket Numbers by Color',
      //   'Status',
      'Quit',
    ],
  });
  switch (choice) {
    case 'Create a parking lot':
      if (parkingLotTest.spots.length) {
        console.log(
          `Parking Lot already created with ${parkingLotTest.spots.length} spots`
        );
        break;
      }
      const { size } = await inquirer.prompt({
        name: 'size',
        message: 'Enter capacity of parking lot',
        type: 'number',
      });
      if (Number.parseInt(size)) console.log(parkingLotTest.create(size));
      else console.log('Spots to be created should be at least 1');
      break;

    case 'Park Car':
      if (!parkingLotTest.spots.length) {
        console.log('Parking Lot not created');
        break;
      }
      if (parkingLotTest.currentSize === parkingLotTest.spots.length) {
        console.log('Parking lot is full');
        break;
      }
      const { regNumber, color } = await inquirer.prompt([
        {
          name: 'regNumber',
          message: 'Enter Registration Number of Car',
        },
        {
          name: 'color',
          message: 'Enter color of Car',
        },
      ]);
      const car = new Car(regNumber, color);
      console.log(parkingLotTest.parkCar(car));
      break;
    case 'All Registration Numbers by Color':
      if (!parkingLotTest.spots.length) {
        console.log('Parking Lot not created');
        break;
      }
      const { colorForRegNumber } = await inquirer.prompt({
        name: 'colorForRegNumber',
        message: 'Enter color of Car',
      });
      console.log(
        `${colorForRegNumber} colored cars : ${parkingLotTest
          .getRegistrationNumbersByColor(colorForRegNumber)
          .join(', ')}`
      );
      break;
    case 'Ticket Number by Registration Number':
      if (!parkingLotTest.spots.length) {
        console.log('Parking Lot not created');
        break;
      }
      const { regNumberForTicketNumber } = await inquirer.prompt({
        name: 'regNumberForTicketNumber',
        message: 'Enter Registration Number of Car',
      });
      const ticket = parkingLotTest.getTicketNumberByRegistrationNumber(
        regNumberForTicketNumber
      );
      if (ticket)
        console.log(
          `Ticker Number for ${regNumberForTicketNumber} : ${ticket}`
        );
      else console.log('Not in parking lot');
      break;

    case 'All Ticket Numbers by Color':
      if (!parkingLotTest.spots.length) {
        console.log('Parking Lot not created');
        break;
      }
      const { colorForTicketNumber } = await inquirer.prompt({
        name: 'colorForTicketNumber',
        message: 'Enter color of Car',
      });
      console.log(
        `${colorForTicketNumber} colored cars : ${parkingLotTest
          .getTicketNumbersByColor(colorForTicketNumber)
          .join(', ')}`
      );
      break;
    case 'Status':
      if (!parkingLotTest.spots.length) {
        console.log('Parking Lot not created');
        break;
      }
      console.log(parkingLotTest);
      break;
    case 'Quit':
      process.exit(0);
    default:
      break;
  }
  console.log();
} while (true);
