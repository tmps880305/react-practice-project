import React from 'react';

const UserItems = props => {

    return (
        <li>
            <p>{props.name} ({props.age} years old)</p>
        </li>
    );
};

export default UserItems;
