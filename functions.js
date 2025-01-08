//syntax................................................................
//function function_name(optional parameters)  //function declaration
//             {
//                statements
//             }
//         function_name(arguments);   //function calling
//if optional paramenters are given then args should be returned
//note : without calling function, he function body will never execute

//without parameters and args...............
function demo(){
    console.log("func without parms and args");
}
demo();

//with parameters and args..................
//add 5,6   7,8  3,4  5,6  10,30
function add(a,b){
    
    //console.log(a);
    //console.log(b);
    console.log(a+b);
}
add(5,6);
add(7,8);
add(3,4);

function addToCart(){
    document.body.style.background="teal";
    alert("added");
}