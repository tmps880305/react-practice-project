import React, {useState} from 'react';

import RegisterUser from './components/Register/RegisterUser'
import Users from './components/User/Users'

const INITIAL_USERS = [
    {
        id: 'u1',
        name: 'Max',
        age: 31,
    }
];

function App() {
    const [users, setUsers] = useState(INITIAL_USERS);

    const registerUserHandler = registeredUser => {
        setUsers(preState => {
            return [registeredUser, ...preState]
        })
    };

    return (
        <div>
            <RegisterUser onRegisterUser={registerUserHandler}/>
            <Users items={users}/>
        </div>
    );
}

export default App;
