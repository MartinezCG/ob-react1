import React from 'react';
import { useNavigate , useLocation } from "react-router-dom";

const HomePage = () => {

        /* Doesn't use push, just use history and put the 
    path that use as parameter, this will store all the routes that we clicked */
    const location = useLocation();
    const history = useNavigate();
    console.log('We are in route:', location.pathname)


    /* Doesn't use push, just use history and put the 
    path that use as parameter, this will store all the routes that we clicked */
    const navigated = (path) => {
        history(path)
    }

    /* Use history() with a -1 to go BACK or with an 1 to go forward */


    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => navigated('/profile')}>
                Go to Profile
            </button>
            
        </div>
    );
}

export default HomePage;
