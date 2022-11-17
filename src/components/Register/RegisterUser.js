import React from 'react';

import Card from '../UI/Card'
import './Register.css'
import RegisterForm from './RegisterForm'

const RegisterUser = (props) => {

    const addUserHandler = addUserData => {
        const userData = {
            ...addUserData,
            id: Math.random().toString()
        }

        props.onRegisterUser(userData);

    };

    return (
        <Card className="register">
            <RegisterForm onAddUser={addUserHandler}/>
        </Card>
    );

};

export default RegisterUser;
