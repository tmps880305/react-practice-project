import React, {useState} from 'react';

import classes from './RegisterForm.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const RegisterForm = (props) => {

    const [addUser, setAddUser] = useState({name: '', age: ''});
    const [errSate, setErrState] = useState();

    const nameInputHanadler = event => {
        setAddUser((preState) => {
            return {...preState, name: event.target.value};
        })
    };

    const ageInputHanadler = event => {
        setAddUser((preState) => {
            return {
                ...preState, age: event.target.value
            };
        })
    };

    const submitHandler = event => {
        event.preventDefault();

        if (addUser.name.trim().length === 0 || addUser.age.trim().length === 0) {
            setErrState({
                title: 'Invalid name or age.',
                message: 'Please enter correct name and age (not empty).'
            });
            return;
        }

        if (+addUser.age < 1) {
            setErrState({
                title: 'Invalid age.',
                message: 'Please enter correct age (>0).'
            });
            return;
        }

        props.onAddUser(addUser);
        setAddUser({name: '', age: ''});
    };

    const cancelHandler = () => {
        setErrState(null);
    };

    return (
        <div>
            {errSate && <ErrorModal title={errSate.title} message={errSate.message} onCanceled={cancelHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label>Username</label>
                    <input type="text" value={addUser.name} onChange={nameInputHanadler}/>
                    <label>Age (Years)</label>
                    <input type="number" value={addUser.age} onChange={ageInputHanadler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );

};

export default RegisterForm;
