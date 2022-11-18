import React from 'react';

import UsersList from './UsersList'
import '../UI/Card.module.css'

const Users = props => {

    return (<UsersList items={props.items}/>)

};

export default Users;
