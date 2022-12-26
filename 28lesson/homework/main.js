console.log('\n\nЗАВДАННЯ №1\n\n');

// Create the car object with properties for brand, model, year of issue, average speed, fuel tank volume, 
// average fuel consumption per 100 kilometers, and drivers
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  avgSpeed: 80,
  fuelTank: 50,
  avgConsumption: 8,
  drivers: ["John", "Jane"]
};

// Create methods for working with the car object
let carOperations = {
  // Method to show all information about the car in the console
  showInfo: function() {
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year of issue: ${this.year}`);
    console.log(`Average speed: ${this.avgSpeed} km/h`);
    console.log(`Fuel tank volume: ${this.fuelTank} liters`);
    console.log(`Average fuel consumption per 100 km: ${this.avgConsumption} liters`);
    console.log(`Drivers: ${this.drivers.join(", ")}`);
  },

  // Method to add a third driver to the car
  addDriver: function(name) {
    this.drivers.push(name);
  },

  // Method to check if a driver is listed in the car object
  hasDriver: function(name) {
    return this.drivers.includes(name);
  },

  // Method to calculate the required time and amount of fuel to cover a given distance
  calculateTrip: function(distance) {
    let time = distance / this.avgSpeed;
    let fuel = distance * this.avgConsumption / 100;

    return {time: time, fuel: fuel};
  }
};

// Example usage: show the car's information, add a driver, check if the driver is listed, 
// and calculate the required time and fuel for a 500 km trip
carOperations.showInfo.call(car);

carOperations.addDriver.call(car, "Oleg");

console.log((carOperations.hasDriver.call(car, "Oleg")) + ' ' + car.drivers[2] + ' is in the list'); // Output: true

console.log((carOperations.hasDriver.call(car, "Serg")) + ' ' + ' is NOT in the list'); // Output: false

let trip = carOperations.calculateTrip.call(car, 80);

console.log(`Time: ${trip.time} hours`);
console.log(`Fuel: ${trip.fuel} liters`);






console.log('\n\nЗАВДАННЯ №2\n\n');

// Create the time object with properties for hours, minutes, and seconds
let time = {
  hours: 12,
  minutes: 30,
  seconds: 45
};

// Create functions for working with the time object
let timeOperations = {
  // Function to show the time in the console
  showTime: function() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  },

  // Function to change the time by a given number of seconds
  changeSeconds: function(seconds) {
    this.seconds += seconds;
    while (this.seconds >= 60) {
      this.seconds -= 60;
      this.minutes++;
    }
    while (this.seconds < 0) {
      this.seconds += 60;
      this.minutes--;
    }
  },

  // Function to change the time by a given number of minutes
  changeMinutes: function(minutes) {
    this.minutes += minutes;
    while (this.minutes >= 60) {
      this.minutes -= 60;
      this.hours++;
    }
    while (this.minutes < 0) {
      this.minutes += 60;
      this.hours--;
    }
  },

  // Function to change the time by a given number of hours
  changeHours: function(hours) {
    this.hours += hours;
  }
};

// Example usage: show the time, change the time by 10 seconds, and show the time again
timeOperations.showTime.call(time); // Output: "12:30:45"

timeOperations.changeHours.call(time, 1);
timeOperations.changeMinutes.call(time, 85);
timeOperations.changeSeconds.call(time, 190);

timeOperations.showTime.call(time); // Output: "14:58:55"






console.log('\n\nЗАВДАННЯ №3\n\n');

// Create the first object with a description of a common fraction
let fraction = {
  numerator: 3,
  denominator: 4
};

// Create the second object with methods for performing arithmetic operations on the fraction
let fractionOperations = {
  // Method for adding two fractions
  add: function(fraction1, fraction2) {
    let numerator = (fraction1.numerator * fraction2.denominator) + (fraction2.numerator * fraction1.denominator);
    let denominator = fraction1.denominator * fraction2.denominator;
    return {numerator: numerator, denominator: denominator};
  },

  // Method for subtracting two fractions
  subtract: function(fraction1, fraction2) {
    let numerator = (fraction1.numerator * fraction2.denominator) - (fraction2.numerator * fraction1.denominator);
    let denominator = fraction1.denominator * fraction2.denominator;
    return {numerator: numerator, denominator: denominator};
  },

  // Method for multiplying two fractions
  multiply: function(fraction1, fraction2) {
    let numerator = fraction1.numerator * fraction2.numerator;
    let denominator = fraction1.denominator * fraction2.denominator;
    return {numerator: numerator, denominator: denominator};
  },

  // Method for dividing two fractions
  divide: function(fraction1, fraction2) {
    let numerator = fraction1.numerator * fraction2.denominator;
    let denominator = fraction1.denominator * fraction2.numerator;
    return {numerator: numerator, denominator: denominator};
  }
};

// Example usage: add two fractions
let fraction1 = {numerator: 1, denominator: 2};

let fraction2 = {numerator: 1, denominator: 2};

let result = fractionOperations.multiply(fraction1, fraction2);

console.log(`${result.numerator}/${result.denominator}`); // 1/4