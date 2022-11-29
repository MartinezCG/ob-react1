import React from 'react';
import { useLocation , useHistory } from "react-router-dom";

/* useHistory has been changed by useNavigate

    also, the method 'push' was renamed by 'navigate' */

const AboutPage = () => {

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

    return (
        <div>
            <h1>
                About | FAQs
            </h1>
            <div>
                <button onClick={ () => navigate('/') }>
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
