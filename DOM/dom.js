document.getElementById("");

let element = document.getElementById("demo");
element.innerText = "DOM";
console.log(element);
let div = document.getElementById("test");
//div.innerText = "<h1> Header</h1>"
div.innerHTML = "<h1> Header</h1>"
console.log(div);


let ele = document.getElementsByClassName("test");
console.log(ele);
console.log(Array.isArray(ele));
ele[0].style.backgroundColor="yellow";
//spread operator 
//used to take out each and every value from original array and store it in new array
//this new array = pure array
//syntax - [... variable]
let x = [...ele];
console.log(x,Array.isArray(x));
x.map((element)=>{
    console.log(element);
   element.style.backgroundColor="teal";
})


let ele = document.getElementsByTagName("div");
console.log(ele);


let ele = document.getElementsByName("username");
//console.log(ele);
[...ele]


let ele = document.querySelector("#demo");
console.log(ele);

let ele = document.querySelector(".test");
console.log(ele);


let ele = document.querySelectorAll(".test");
console.log(ele);
[...ele].map(element=>{
    console.log(element.innerText);
})