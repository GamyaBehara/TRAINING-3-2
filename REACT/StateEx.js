// import React, { Component } from "react";

// class StateEx extends Component {  
//     render() {
//         console.log(this);
//         return (
//             <div>states</div>
//         );
//     }
// }

import React, { Component } from "react";

class StateEx extends Component {
    constructor() {
        super();
        this.state = {
            username: "hello",  
            count: 0            
        };
    }
    changeName = () => {
        this.setState({ username: "hello world" });
    }
    render() {
        console.log(this);
        return (
            <div>
                <h1>{this.state.username}</h1>
                <button onClick={this.changeName}>Update the state</button>
            </div>
        );
    }
}

export default StateEx;