//console.log ("hello");

//for loop
for(let i=1;i<=5; i++){
    console.log("hello world");
}

//even and odd from 1-100
n=100;
for(let i=1; i<=n; i++){
    if(i%2==0){
        console.log(i+" is even");
    }else{
        console.log(i+" is odd");
    }
}

//factorial of 5
//5! = 5x4x3x2x1 = 120
let factorial = 1;
for (let i = 1; i <= 5; i++) {
  factorial *= i;
}
console.log("factorial of 5 is "+factorial);

//while loop
let i=1;
while(i<=5){
    console.log("while");
    i++;
}

//do-while loop
let x=1;
do{
    console.log("do while");
    x++;
}while(x<=5);

