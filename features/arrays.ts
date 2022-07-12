const carMakers = ['ford', 'toyota', 'tesla'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['model x']
];


// Help with inference when extracting values
const newCar = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
//carMakers.push(100);

// help with 'map'
carMakers.map((car: string): string => {
    return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | String)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
