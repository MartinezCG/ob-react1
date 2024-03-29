import React from 'react';
import LoginFormik from '../../components/pure/forms/loginFormik'
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

const LoginPage = () => {

    const history = useHistory()

    const navigateTo = (path) => {
        history.push(path)
    }

    return (
        <div>
            <h1>Login Page</h1>
            <LoginFormik></LoginFormik>
            <Button variant='contained' color='secondary' onClick={() => navigateTo('/register')}>Register</Button>
        </div>
    );
}

export default LoginPage;
