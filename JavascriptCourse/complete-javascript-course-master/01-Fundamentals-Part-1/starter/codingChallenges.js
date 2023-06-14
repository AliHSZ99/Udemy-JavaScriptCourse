/////////////////////////////////////////////////////////////////
// // // Coding Challenge #1
// // let heightMark = 1.69;
// // let massMark = 78;
// // let heightJohn = 1.95;
// // let massJohn = 92;
// // let BMIMark = massMark / (heightMark * heightMark);
// // let BMIJohn = massJohn / (heightJohn * heightJohn);
// // console.log("Mark BMI: " + BMIMark, "John BMI: " + BMIJohn);
// // let markHigherBMI = BMIMark > BMIJohn;
// // console.log("Mike has a higher BMI than John: " + markHigherBMI);

// // heightMark = 1.88;
// // massMark = 95;
// // heightJohn = 1.76;
// // massJohn = 85;
// // BMIMark = massMark / (heightMark * heightMark);
// // BMIJohn = massJohn / (heightJohn * heightJohn);
// // console.log("Mark BMI: " + BMIMark, "John BMI: " + BMIJohn);
// // markHigherBMI = BMIMark > BMIJohn;
// // console.log("Mike has a higher BMI than John: " + markHigherBMI);
// // // Coding Challenge #1 End

/////////////////////////////////////////////////////////////////
// // Coding Challenge #2
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }
// // Coding Challenge #2 End

// /////////////////////////////////////////////////////////////////
// // Coding Challenge #3
// let scoreDolphins = (96 + 108 + 89) / 3;
// let scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreDolphins < scoreKoalas) {
//   console.log("Koalas win the trophy");
// } else {
//   console.log("Both win the trophy");
// }

// // Bonus 1
// scoreDolphins = (97 + 112 + 101) / 3;
// scoreKoalas = (109 + 95 + 123) / 3;
// let isDolphins100 = scoreDolphins >= 100;
// let isKoalas100 = scoreKoalas >= 100;
// console.log(scoreDolphins, scoreKoalas);
// if (scoreDolphins > scoreKoalas && isDolphins100) {
//   console.log("Dolphins win the trophy");
// } else if (scoreDolphins < scoreKoalas && isKoalas100) {
//   console.log("Koalas win the trophy");
// } else {
//   console.log("Both win the trophy");
// }

// // Bonus 2
// scoreDolphins = (97 + 112 + 101) / 3;
// scoreKoalas = (109 + 95 + 106) / 3;
// isDolphins100 = scoreDolphins >= 100;
// isKoalas100 = scoreKoalas >= 100;
// console.log(scoreDolphins, scoreKoalas);
// if (scoreDolphins > scoreKoalas && isDolphins100) {
//   console.log("Dolphins win the trophy");
// } else if (scoreDolphins < scoreKoalas && isKoalas100) {
//   console.log("Koalas win the trophy");
// } else if (scoreDolphins === scoreKoalas && isDolphins100 && isKoalas100) {
//   console.log("Both win the trophy");
// } else {
//   console.log("Nobody wins...");
// }

/////////////////////////////////////////////////////////////////
// Coding Challenge #3
const bill = 275;

let tipPercentage = bill >= 50 && bill <= 300 ? 15 : 20;

let tip = (bill * tipPercentage) / 100;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
