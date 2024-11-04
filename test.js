
// 1

let totalAmount = parseInt(prompt("Enter the amount: "));
if (totalAmount > 500) {
    discount = totalAmount * 0.2;
    purchaseAmount = totalAmount - discount;
    console.log(purchaseAmount);
}
else if (totalAmount >= 200 && totalAmount <= 500) {
    discount = totalAmount * 0.1;
    purchaseAmount = totalAmount - discount;
    console.log(purchaseAmount);
}
else if (totalAmount < 200) {
    console.log("No Discount");
}
else {
    console.log("Enter correct amount")
}


// 2
let temperature = parseInt(prompt("Enter the temperature: "));
if (temperature > 40) {
    console.log("Extreme Heat");
}
else if (temperature <= 20 && temperature >= 40) {
    console.log("Moderate");
}
else if (temperature < 20) {
    console.log("cold");
}
else {
    console.log("Enter the correct temperature");
}


// 3
const marks = parseInt(prompt("Enter student marks: "));
if (marks >= 90) {
    console.log("A+")
}
else if (marks >= 80 && marks <= 89) {
    console.log("A")
}
else if (marks >= 70 && marks <= 79) {
    console.log("B")
}
else if (marks < 70) {
    console.log("C")
}
else {
    console.log("Enter your correct marks")
}


// 4
const lateDays = parseInt(prompt("Enter late days: "));
if (lateDays >= 1 && lateDays <= 5) {
    console.log(totalfineAmount = lateDays * 2);
}
else if (lateDays >= 6 && lateDays <= 10) {
    console.log(totalfineAmount = lateDays * 3);
}
else if (lateDays > 10) {
    console.log(totalfineAmount = lateDays * 5);
}
else {
    console.log("Invalid")
}


// 5
let favoriteFood = prompt("Enter your Favorite food: ");
if (favoriteFood == "pizza") {
    console.log("Pizza lover!");
}
else if (favoriteFood == "Pasta") {
    console.log("Pasta lover!");
}
else if (favoriteFood == "Burger") {
    console.log("Burger lover!");
}
else {
    console.log("Invalid")
}


// 1
let age = parseInt(prompt("Enter age: "));
let income = parseFloat(prompt("Enter income: "));
let criminalRecord = prompt("Enter the criminal record in true or false: ");
if (age >= 21 && age <= 60 && income > 20000 && criminalRecord == false) {
    console.log("Eligible for loan");
}
else {
    console.log("Not eligible for loan");
}


// 2
let salesTarget = parseInt(prompt("Enter the target amount in percentage: "));
let monthlySalary = parseInt(prompt("Enter the salary: "));
if (salesTarget > 120) {
    bonus = monthlySalary * 0.2;
    console.log(bonus);
}
else if (salesTarget >= 100 && salesTraget <= 120) {
    bonus = monthlySalary * 0.1;
    console.log(bonus);
}
else if (salesTarget < 100) {
    console.log("No bonus");
}
else {
    console.log("Invalid");
}


// 3
const totalClasses = parseInt(prompt("Enter total classes: "));
const classesAttended = parseInt(prompt("Enter total classes attended: "));
const attendance = (classesAttended / totalClasses) * 100;
if (attendance >= 75) {
    console.log("eligible");
}
else {
    console.log("not eligible");
}


// 4
let purchaseAmount = parseInt(prompt("Enter the purchase amount: "));
if (purchaseAmount >= 100) {
    let points = (Math.floor(purchaseAmount / 10)) * 2;
    console.log(`Total points earned ${points}`);
}
else {
    let points = (Math.floor(purchaseAmount / 10)) * 1;
    console.log(`Total points earned ${points}`);
}


// 5
let str = prompt("Enter a string: ");
count = 0;
for (i = 0; i < str.length; i++) {
    if (str[i].includes("e")) {
        count++;
    }
}
console.log(count)


// 1
const currentDay = parseInt(prompt("Enter current day: "));
const expiryDay = parseInt(prompt("Enter expiration day: "));

if (expiryDay < currentDay) {
    console.log("Item is Expired");
}
else if (expiryDay >= currentDay) {
    console.log("Item is not Expired");
}
else {
    console.log("Invalid");
}


// 2
let arr = [2, 3, 4, 5, 6, 7, 8];
pattern = true;
for (i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
        if (arr[i] % 2 == 0) {
        }
        else {
            pattern = false;
        }
    }
    else {
        if (arr[i] % 2 !== 0) {
        }
        else {
            pattern = false;
        }
    }

}
if (pattern) {
    console.log("pattern followed");
}
else {
    console.log("pattern broken");
}






// 3
const balance = parseInt(prompt("Enter the balance: "));
const withdrawalAmount = parseInt(prompt("Enter the withdrawl amount: "));
if (balance >= withdrawalAmount) {
    console.log("allow transaction")
}
else if (balance < withdrawalAmount) {
    console.log("reject transaction");
}
else {
    console.log("invalid");
}


// 4

let string = prompt("Enter the string: ").toLowerCase();
let pattern = true;
for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
        if (string[i] !== "a" && string[i] !== "e" && string[i] !== "i" && string[i] !== "o" && string[i] !== "u") {
            pattern = false;
        }
    } else {
        if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
            pattern = false;
        }
    }
}
if (pattern) {
    console.log("Pattern followed");
} else {
    console.log("Pattern broken");
}








// 5
let number = parseInt(prompt("Enter a number: "));
sum = 0;
while (number > 0) {
    rem = number % 10;
    sum += rem;
    number = Math.floor(number / 10);
}
if (sum % 2 == 0) {
    console.log("even")
}
else {
    console.log("odd")
}



