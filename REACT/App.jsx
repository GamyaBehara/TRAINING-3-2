import React, { Component } from "react";
import CBCPropsex1 from "./props/CBCPropsex1"; 

class App extends Component {
    render() {
        return (
            <div>
                <h1>App Component</h1>
                <hr />

                <CBCPropsex1
                    username="Sam"
                    age={25}
                    designation={["developer", "tester"]}
                    userDetails={{ city: "Hyd", area: "kompally" }}
                    sendFunction={() => alert("Hi, I am from the parent component")}
                />
            </div>
        );
    }
}

export default App;
