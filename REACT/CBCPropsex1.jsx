import React, { Component } from "react";

class CBCPropsex1 extends Component {
    render() {
        console.log(this.props); // Log props to check if they are passed correctly
        return (
            <div>
                <h1>CBCPropsex1 Component</h1>

                <h2>Username: {this.props.username}</h2>
                <h2>Age: {this.props.age}</h2>
                <h3>Designation: {this.props.designation[0]}</h3>
                <h3>Area: {this.props.userDetails.area}</h3>

                <button onClick={this.props.sendFunction}>Click Me</button>
            </div>
        );
    }
}

export default CBCPropsex1;
