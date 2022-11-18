import React, { useState } from 'react';

let red = 0
let green = 200
let blue = 150

// ? Estilo para usuario loggeado
const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '10px'
}

const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '10px'
}

// Login / Logout buttons

const LoginButton = ({loginAction, propStyle}) => {
    return(
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction, propStyle}) => {
    return(
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}

// ? (Expresion true) && expresion => se renderiza la expresion
// ? (Expresion false) && expresion => no se renderiza la expresion



const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessage, setNMessage] = useState(0);

    /* const updateAccess = () => {
        setAccess(!access)
    } */

    const logoutAction = () => {
        setAccess(false)
    }

    const loginAction = () => {
        setAccess(true)
    }

    let optionalButton

    /* if(access) {
        optionalButton = <button onClick={updateAccess}>Logout</button>
    }else{
        optionalButton = <button onClick={updateAccess}>Login</button>
    }
    */

    if(access) {
        optionalButton = <LogoutButton propStyle={ unloggedStyle } logoutAction={logoutAction}></LogoutButton>
    }else{
        optionalButton = <LoginButton propStyle={ loggedStyle } loginAction={loginAction}></LoginButton>
    }

    // Unread Messages
    let addMessages = () => {
        setNMessage(nMessage+1)
    }



    return (
        <div>
            {/* Optional button */}

            { optionalButton }


            {/* N Messages unread */}
            {/* {nMessage > 0 && nMessage === 1 && <p>You have {nMessage} new message</p>}
            {nMessage > 1 && <p>You have {nMessage} unread messages</p>}
            {nMessage === 0 && <p>There are no new messages</p>} */}

            {/* Ternay Operator */}

            {access ? 
            
                (<div>
                    {nMessage > 0 ? 
                    <p>You have {nMessage} new message{ nMessage>1 ? 's': null}</p> : 
                    <p>There are no new messages</p>
                    }
                    <button onClick={addMessages}>{nMessage === 0 ? 'Add your first message': 'Add new messages'}</button>
                </div>) : null }   
        </div>
    );
}

export default OptionalRender;
