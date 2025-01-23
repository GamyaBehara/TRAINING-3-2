//console.log(window);
function fetchUsers(){
    let res = window.fetch("https://jsonplaceholder.typicode.com/users");
    //console.log(res);
    res.then(val=>{
        //console.log(val);
        //comsole.log(val.json());              
        return val.json().then(data=>{         
            console.log(data);
            let store = document.getElementById("store");
            data.map((user)=>{
                //console.log(user);
                store.innerHTML += `
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.company.name}</td>
                </tr>
                `
            })
        })
    })
    .catch(err=>console.log(err))
}
fetchUsers()