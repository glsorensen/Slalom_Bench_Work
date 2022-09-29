const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
  ['f150'],
  ['corrolla'],
  ['camero']
];

// Help with inference when extracting values
const cars = carMakers[0];
const myCar = carMakers.pop();

// Preven incompatable values
carMakers.push('volvo');

// Help with 'map'

carMakers.map((cars: string): string => {
  return cars.toUpperCase();
});

// Flexible Types
// const importantDates = [new Date(), '2030-10-10'];
const importantDates: (string | Date)[] = [new Date()];
importantDates.push('2030-12-12');
importantDates.push(new Date());

