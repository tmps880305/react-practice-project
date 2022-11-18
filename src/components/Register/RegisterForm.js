import React, {useState, Fragment, useRef} from 'react';

import classes from './RegisterForm.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const RegisterForm = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [errSate, setErrState] = useState();

    const submitHandler = event => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setErrState({
                title: 'Invalid name or age.',
                message: 'Please enter correct name and age (not empty).'
            });
            return;
        }

        if (+enteredAge < 1) {
            setErrState({
                title: 'Invalid age.',
                message: 'Please enter correct age (>0).'
            });
            return;
        }

        props.onAddUser({name: enteredName, age: enteredAge});

        // setAddUser({name: '', age: ''});

        /* Careful: NOT GOOD to manipulate ref dom like this! */
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';


    };

    const cancelHandler = () => {
        setErrState(null);
    };

    return (
        <Fragment>
            {errSate && <ErrorModal title={errSate.title} message={errSate.message} onCanceled={cancelHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label>Username</label>
                    <input type="text" ref={nameInputRef}/>
                    <label>Age (Years)</label>
                    <input type="number" ref={ageInputRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Fragment>
    );

};

export default RegisterForm;
