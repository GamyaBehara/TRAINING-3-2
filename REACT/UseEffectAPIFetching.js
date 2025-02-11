import React, { useEffect, useState } from 'react';

const UseEffectAPIFetching = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>UseEffect API Fetching
            {users.map((user, i) => (
                <React.Fragment key={i}>
                    <h1>{user.name}</h1>
                    <h3>{user.email}</h3>
                </React.Fragment>
            ))}
        </div>
    );
};

export default UseEffectAPIFetching;
