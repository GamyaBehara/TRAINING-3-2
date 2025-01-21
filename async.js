console.log(10);
console.log(20);

//setTimeout
setTimeout(()=>{
    console.log(10);
},5000)

console.log(30);
console.log(40);

//setIntervals
//setInterval(()=>{
//    document.writeln("MRU")
//},1500)

//promise
//new Promise((resolve,reject)=>{});
//(resolve,reject) = (successful parameter, unsuccessful parameter)


let p1 = new Promise((resolve,reject)=>{});
console.log(p1);


let p2 = new Promise((resolve,reject)=>{
    resolve("success");
});
console.log(p2);
p2.then((Response)=>
{
    console.log(Response);
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log("finally printing for both"))


let p3 = new Promise((resolve,reject)=>{
    reject("failure");
});
console.log(p3);
p3.then((data)=>{console.log(data)}).catch((error=>{}))


