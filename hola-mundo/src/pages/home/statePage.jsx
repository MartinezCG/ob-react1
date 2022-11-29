import React from 'react';
import { useLocation } from "react-router-dom";

const PropsPage = () => {

    const location = useLocation()
    
    console.log('Queries Params', location.search) // Query Params Sent

    return (
        <div>
            <h1>State: {location.state.online ? 'The user is Online': 'The user is Offline'}</h1>
        </div>
    );
}

export default PropsPage;
