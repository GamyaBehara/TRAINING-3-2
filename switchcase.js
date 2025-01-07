let a = 20;
let b = 30;
let c = 10;

if (a === b && b === c) {
  console.log("All values are equal.");
} else if (a > b && a > c) {
  console.log("a is the greatest: " + a);
} else if (b > a && b > c) {
  console.log("b is the greatest: " + b);
} else if (c > a && c > b) {
  console.log("c is the greatest: " + c);
} else {
  console.log("Invalid values.");
}
