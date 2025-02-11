// // import React from 'react';

// // export default function MyForm() {
// //     return (
// //         <div>
// //             <form>
// //                 <label htmlFor="firstName">First Name:</label>
// //                 <input id="firstName" type="text" placeholder="Enter your first name" />
// //                 <button type="submit">Submit</button>
// //             </form>
// //         </div>
// //     );
// // }

// import React, { useState } from 'react';

// export default function MyForm() {
//     const [firstName, setFirstName] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault(); 
//         console.log( firstName); 
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="firstName">First Name:</label>
//                 <input
//                     id="firstName"
//                     type="text"
//                     placeholder="Enter your first name"
//                     value={firstName} 
//                     onChange={(e) => setFirstName(e.target.value)} 
//                 />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }



import React, { Component } from 'react';
import './formStyles.css';

export class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: '',
            skill: 'view'
        };
    }

    changeTextValue = (event) => {
        this.setState({
            textValue: event.target.value
        });
    }

    changeSkill = (event) => {
        this.setState({
            skill: event.target.value
        });
    }

    submitValues = (event) => {
        event.preventDefault(); 
        alert(`Form is submitted: ${this.state.textValue} ${this.state.skill}`);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitValues}>
                    <label>First Name</label>
                    <input 
                        type='text' 
                        value={this.state.textValue} 
                        onChange={this.changeTextValue} 
                    />
                    <br />
                    <label>Skill</label>
                    <select 
                        value={this.state.skill} 
                        onChange={this.changeSkill}
                    >
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='view'>View</option>
                    </select>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyForm;