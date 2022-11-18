import React, {useState} from 'react';

import RegisterUser from './components/Register/RegisterUser'
import Users from './components/User/Users'


function App() {
    const [users, setUsers] = useState([]);

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
