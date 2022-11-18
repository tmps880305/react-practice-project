import React from 'react';

import UserItems from './UserItems'
import Card from '../UI/Card'
import classes from './UserList.module.css'

const UsersList = props => {

    return (
        <Card className={classes.users}>
            <ul type="none">
                {props.items.map(user => (
                    <UserItems key={user.id} name={user.name} age={user.age}/>
                ))}
            </ul>
        </Card>
    );
};

export default UsersList;
