import React from 'react';

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
        <RegisterForm onAddUser={addUserHandler}/>
    );

};

export default RegisterUser;
