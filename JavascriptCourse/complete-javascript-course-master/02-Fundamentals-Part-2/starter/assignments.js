// //////////////////////////////////////////////////////////////////
// // ASSIGNMENT 1: FUNCTIONS
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const firstCountry = describeCountry("Canada", 36, "Ottawa");
// const secondCountry = describeCountry("Iraq", 44, "Baghdad");
// const thirdCountry = describeCountry("Iran", 88, "Tehran");
// console.log(firstCountry);
// console.log(secondCountry);
// console.log(thirdCountry);

// //////////////////////////////////////////////////////////////////
// // ASSIGNMENT 2: FUNCTION DECLARATIONS VS. EXPRESSIONS
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const percentage1 = percentageOfWorld1(1000);
// const percentage2 = percentageOfWorld1(1441);
// const percentage3 = percentageOfWorld1(2000);
// console.log(percentage1, percentage2, percentage3);

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };
// const percentage4 = percentageOfWorld1(1000);
// const percentage5 = percentageOfWorld1(1441);
// const percentage6 = percentageOfWorld1(2000);
// console.log(percentage4, percentage5, percentage6);

// //////////////////////////////////////////////////////////////////
// // ASSIGNMENT 3: ARROW FUNCTIONS
// const percentageOfWorld3 = (population) => (population / 7900) * 100;

// const percentage7 = percentageOfWorld3(1000);
// const percentage8 = percentageOfWorld3(1441);
// const percentage9 = percentageOfWorld3(2000);
// console.log(percentage7, percentage8, percentage9);

// //////////////////////////////////////////////////////////////////
// // ASSIGNMENT 4: FUNCTIONS CALLING OTHER FUNCTIONS
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const describePopulation = (country, population) => {
//   console.log(
//     `${country} has ${population} million people, which is about ${percentageOfWorld1(
//       population
//     )}% of the world.`
//   );
// };

// describePopulation("Canada", 36);
// describePopulation("Iraq", 44);
// describePopulation("Iran", 88);
