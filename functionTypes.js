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