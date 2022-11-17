import React, {useState} from 'react';

const RegisterForm = (props) => {

    const [addUser, setAddUser] = useState({name: '', age: ''});

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

        if (addUser.name === '' || addUser.age === '') {
            console.log('Invalid input');
            setAddUser({name: '', age: ''});
            return;
        }

        props.onAddUser(addUser);
        setAddUser({name: '', age: ''});
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Username</label>
            </div>
            <div>
                <input type="text" value={addUser.name} onChange={nameInputHanadler}/>
            </div>
            <div>
                <label>Age (Years)</label>
            </div>
            <div>
                <input type="number" min='0' step='1' value={addUser.age} onChange={ageInputHanadler}/>
            </div>
            <div>
                <button type="submit">Add User</button>
            </div>
        </form>
    );

};

export default RegisterForm;
