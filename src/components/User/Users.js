import React from 'react';

import Card from '../UI/Card'
import UsersList from './UsersList'
import '../UI/Card.css'

const Users = props => {

    return <Card className="register">
        <UsersList items={props.items} />
    </Card>

};

export default Users;
