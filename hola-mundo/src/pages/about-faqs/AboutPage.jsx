import React from 'react';
import { useLocation , useNavigate } from "react-router-dom";

/* useHistory has been changed by useNavigate

    also, the method 'push' was renamed by 'navigate' */

const AboutPage = () => {

    const location = useLocation();
    const history = useNavigate();
    console.log('We are in route:', location.pathname)


    /* Doesn't use push, just use history and put the 
    path that use as parameter, this will store all the routes that we clicked */
    const navigated = (path) => {
        history(path)
    }

    /* Use history() with a -1 to go BACK or with an 1 to go forward */

    const goBack = () => {
        history(-1)
    }

    const goForward = () => {
        history(1)
    }

    return (
        <div>
            <h1>
                About | FAQs
            </h1>
            <div>
                <button onClick={ () => navigated('/') }>
                    Go To Home
                </button>
                <button onClick={ goBack }>
                    Go Back
                </button>
                <button onClick={ goForward }>
                    Go Forward
                </button>
            </div>
        </div>
    );
}

export default AboutPage;
