// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// // let firstName = "Maltilda";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof "jonas");

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;
// // const job;
// var job = "programmer";
// job = "teacher";
// lastName = "Zoubeidi";
// console.log(lastName);

// // Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2020;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Ali";
// const lastName = "Zoubeidi";
// console.log(firstName + " " + lastName);

// // Assignment operators
// // let x = 10 + 5; // 15
// // x += 10; // x = x + 10 = 25
// // x *= 4; // x = x * 4 = 100
// // x++; // x = x + 1
// // x--;
// // x--;
// // console.log(x);

// // Comparison operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// const firstName = "Ali";
// const job = "student";
// const birthYear = 2002;
// const year = 2037;

// const ali =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(ali);

// const aliNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(aliNew);

// console.log(`Just a regular string...`);

// console.log(
//   "String with \n\
// multiple \n\
// lines"
// );

// console.log(`String with
// multiple
// lines`);

// const age = 16;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// // type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log("I am " + 21 + "years old");
// console.log("I am " + "21" + " years old");
// console.log("23" - "10" - 3);
// console.log("23" * "2");
// console.log("23" / "2");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// /////////////////////////////////////////////////////////////////////
// // TRUTHY AND FALSY VALUES
// // 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 5;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job");
// }

// let height = 123;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// /////////////////////////////////////////////////////////////////////
// // EQUALITY OPERATORS: == VS ===

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");

// // Usually avoid this one.
// if (age == 18) console.log("You just became an adult :D (loose)");

// const favourite = Number(prompt("What is your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number");
// } else if (favourite === 7) {
//   console.log('7 is also a cool number');
// }  else if (favourite === 9) {
//   console.log('9 is also a cool number');
// } else {
//   console.log('Number is not 23 or 7');
// }

// if (favourite !== 23) {
//   console.log('why not 23?');
// }

// ///////////////////////////////////////////////////////////////////
// BOOLEAN LOGIC
// Theory

// /////////////////////////////////////////////////////////////////////
// // LOGICAL OPERATORS

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if (shouldDrive) {
// //   console.log("Sarah is able to drive!");
// // } else {
// //   console.log("Someone else should drive...");
// // }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// /////////////////////////////////////////////////////////////////////
// // THE SWITCH STATEMENT
// const day = "friday";

// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day");
//     break;
// }

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend :D");
// } else {
//   console.log("Not a valid day");
// }

/////////////////////////////////////////////////////////////////////
// STATEMENTS AND EXPRESSIONS
// Theory

// /////////////////////////////////////////////////////////////////////
// // THE CONDITIONAL (TERNARY) OPERATOR

// const age = 15;
// age >= 18 ? console.log("I can drink") : console.log("I can drink water");

// const drink = age >= 18 ? "I can drink" : "I can drink water";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "I can drink";
// } else {
//   drink2 = "I can drink water";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
