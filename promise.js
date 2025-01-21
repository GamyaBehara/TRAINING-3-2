let p1 = new Promise((resolve,reject)=>{});
console.log(p1);
let p2 = new Promise((resolve,reject)=>{
    resolve("success");
});
console.log(p2);
let p3 = new Promise((resolve,reject)=>{
    reject("failure");
});
console.log(p3);
