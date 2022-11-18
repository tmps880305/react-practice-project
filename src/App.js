import React, {useState} from 'react';

import RegisterUser from './components/Register/RegisterUser';
import Users from './components/User/Users';
import Wrapper from './components/Helpers/Wrapper';

function App() {
    const [users, setUsers] = useState([]);

    const registerUserHandler = registeredUser => {
        setUsers(preState => {
            return [registeredUser, ...preState]
        })
    };

    return (
        <Wrapper>
            <RegisterUser onRegisterUser={registerUserHandler}/>
            <Users items={users}/>
        </Wrapper>
    );
}

export default App;
