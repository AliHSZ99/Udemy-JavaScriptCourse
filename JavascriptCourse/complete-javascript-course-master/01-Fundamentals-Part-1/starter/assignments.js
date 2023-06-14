//////////////////////////////////////////////////////////////
// // Assignment 1: Values and Variables
// const country = "Canada";
// const continent = "North America";
// let population = 36;
// console.log(country);
// console.log(continent);
// console.log(population);
// // Assignment 1 End

//////////////////////////////////////////////////////////////
// // Assignment 2: Data Types
// const isIsland = false;
// let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);
// // Assignment 2 End

//////////////////////////////////////////////////////////////
// // Assignment 3: let, const and var
// language = "French";
// // Assignment 3 End

//////////////////////////////////////////////////////////////
// // Assignment 4: Basic Operators
// console.log(population / 2);
// population++;
// console.log(population);
// console.log(population > 6);
// console.log(population < 33);
// const description =
//   country +
//   " is in " +
//   continent +
//   ", and its " +
//   population +
//   " million people speak " +
//   language;
// console.log(description);

//////////////////////////////////////////////////////////////
// // Assignment 5: Strings and Template Literals
// const newDescription = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(newDescription);

//////////////////////////////////////////////////////////////
// // Assignment 6: Taking Decisions: if / else Statements
// const differenceBetweenAvg = 33 - population;
// if (population > 33) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(
//     `${country}'s population is ${differenceBetweenAvg} million below average`
//   );
// }

//////////////////////////////////////////////////////////////
// // Assignment 7: Type Conversion and Coersion
// console.log("9" - "5"); // 4
// console.log("19" - "13" + "17"); // 617
// console.log("123" < 57); // false
// console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

//////////////////////////////////////////////////////////////
// // Assignment 8: Equality Operators: == vs. ===
// const numNeighbours = Number(prompt('How many neighbour contries does your country have?'));

// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }
// // Assignment 8 END

// //////////////////////////////////////////////////////////////
// // Assignment 9: Logical Operators
// let countrySpeaksEnglish = true;
// let countryHasLessThan50M = true;
// let countryIsIsland = false;

// if (countrySpeaksEnglish && countryHasLessThan50M && !countryIsIsland) {
//   console.log("You should live in Canada :)");
// } else {
//   console.log("Canada does not meet your criteria :(");
// }

// //////////////////////////////////////////////////////////////
// // Assignment 10: The switch Statement
// let language = "arabic";
// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("Most number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers!");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too :D");
//     break;
// }

// //////////////////////////////////////////////////////////////
// // The Conditional (Ternary) Operator
// let countryPopulation = 130;

// countryPopulation > 33
//   ? console.log("Canada's population is above average")
//   : console.log("Canada's population is below average");
