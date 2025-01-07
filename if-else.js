let a = 20;
let b = 30;
let c = 10;

switch (true) {
  case a === b && b === c:
    console.log("All values are equal.");
    break;
  case a > b && a > c:
    console.log("a is the greatest: " + a);
    break;
  case b > a && b > c:
    console.log("b is the greatest: " + b);
    break;
  case c > a && c > b:
    console.log("c is the greatest: " + c);
    break;
  default:
    console.log("Invalid values.");
}
