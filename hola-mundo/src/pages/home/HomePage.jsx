import React from 'react';
import { useHistory , useLocation } from "react-router-dom";

const HomePage = () => {
    
    
    const location = useLocation();
    const history = useHistory();
    console.log('We are in route:', location.pathname)

    const navigate = (path) => {
        history.push(path)
    }

    const goBack = () => {
        history.goBack()
    }

    const goForward = () => {
        history.goForward()
    }

    const navigateProps = (path) => {
     
        history.push({
            pathname: path,
            search: '?online=true', //Query params
            state: {
                online: true
            }
        })

    }


    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={ () => navigateProps ('/online-state') }>
                Go to Page with State / Query Params
            </button>
            <button onClick={ goBack }>
                Go Back
            </button>
            <button onClick={ goForward }>
                Go Forward
            </button>
            
        </div>
    );
}

export default HomePage;
