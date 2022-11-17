import React from 'react';

import UserItems from './UserItems'

const UsersList = props => {

    return (
        <ul type="none">
            {props.items.map(user => (
                <UserItems key={user.id} name={user.name} age={user.age}/>
            ))}
        </ul>
    );
};

export default UsersList;
