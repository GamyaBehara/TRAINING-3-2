//anonymous
//function(){
//    console.log("anonymous func");
//}

let x= function(){
    console.log("function expression");
}
x();

//IIFE
(
    function(){
        console.log("IIFE");
    }
)();


//arrow
function demo(){
    console.log("arrow function");
}
demo();


()=>{console.log("hello")};
x();

//return 
//implicit return
let X = (a,b) => a+b;
console.log(x(10,30));
let Y = (a,b) => {return a+b; }
console.log(Y(3,3));

//higher order function
function hof(a){
    return a;
}
let p = hof(function(){return "callback fn"});


//callback function
function callback(){
    return callback;
};
let A = add(function(a,b){return a+b});
console.log(A);

let users = ["A","B","C","D","E"];
users.map((users)=>{
    console.log(users);
});

//console.log(users[0]);
//console.log(users[1]);
//console.log(users[2]);
//console.log(users[3]);
//console.log(users[4]);
//console.log(users[5]);

//for(let i=0;i<users.length;i++){
//    console.log(users[i]);
//}
