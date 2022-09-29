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
carMakers.push(100);

// Help with 'map'

carMakers.map((cars: string): string => {
  return cars.toUpperCase();
});