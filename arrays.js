//JSON
let userdetails={
    name : 'ABC',
    age : 25,
    city : 'hyd',
}
console.log(userdetails);
console.log(typeof(userdetails));
console.log(userdetails.name);

//STRINGIFY
let x = JSON.stringify(userdetails);
console.log(x);
console.log(x.name);
console.log(typeof(x));

//PARSE
let y = JSON.parse(x);
console.log(y);
console.log(y.name);
console.log(typeof(y));