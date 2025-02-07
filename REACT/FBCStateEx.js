import React, { useState } from 'react'
const FBCStateEx = () =>{
    // const data = React.useState(100);
    // console.log(data);

    const [value, setValue] = useState("MRU");
    // console.log(value);
    let changeName = ()=>{
        setValue("Malla Reddy University");
    }
    return(
        <div>FBCStateEx
            <h1>{value}</h1>
            <button onClick={changeName}>change state</button>
        </div>

    )
}
export default FBCStateEx;