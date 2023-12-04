// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// Test Data 1
const markWeight1 = 78; // kg
const markHeight1 = 1.69; // meters

const johnWeight1 = 92; // kg
const johnHeight1 = 1.95; // meters

// Calculate BMIs
const markBMI1 = markWeight1 / (markHeight1 * markHeight1);
const johnBMI1 = johnWeight1 / (johnHeight1 * johnHeight1);

// Compare BMIs
const markHigherBMI1 = markBMI1 > johnBMI1;

console.log(`Test Data 1:
Mark's BMI: ${markBMI1}
John's BMI: ${johnBMI1}
Is Mark's BMI higher than John's? ${markHigherBMI1}`);

// Test Data 2
const markWeight2 = 95; // kg
const markHeight2 = 1.88; // meters

const johnWeight2 = 85; // kg
const johnHeight2 = 1.76; // meters

// Calculate BMIs
const markBMI2 = markWeight2 / (markHeight2 * markHeight2);
const johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);

// Compare BMIs
const markHigherBMI2 = markBMI2 > johnBMI2;

console.log(`Test Data 2:
Mark's BMI: ${markBMI2}
John's BMI: ${johnBMI2}
Is Mark's BMI higher than John's? ${markHigherBMI2}`);

