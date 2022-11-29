import React from 'react';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

const RegisterPage = () => {

    const history = useHistory()

    const navigateTo = (path) => {
        history.push(path)
    }

    return (
        <div>
            <h1>Register Page</h1>
            <Button variant='outlined' color='secondary' onClick={() => navigateTo('/login')}>Back to Login</Button>
        </div>
    );
}

export default RegisterPage;
