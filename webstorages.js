//LOCAL STORAGES
//localStorage.clear();
//localStorage.setItem("user","ABC");
localStorage.setItem("user1","Alice");
localStorage.setItem("user2","Bob");
localStorage.setItem("user3","Charlie");
localStorage.setItem("user4","David");
localStorage.setItem("user5","Emanuel");
localStorage.setItem("user6","Frank");

let user6 = localStorage.getItem("user6");
console.log("user6");

localStorage.removeItem("user");

//localStorage.clear();

//SESSION STORAGES
sessionStorage.setItem("userA","Alice");
sessionStorage.setItem("userB","Bob");
sessionStorage.setItem("userC","Charlie");
sessionStorage.setItem("userD","David");
sessionStorage.setItem("userE","Emanuel");
sessionStorage.setItem("userF","Frank");

let userF = sessionStorage.getItem("userF");
console.log("userF");

