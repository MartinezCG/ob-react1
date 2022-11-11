import React, { useState } from 'react';

// Definiendo estilos en constantes

// ? Estilo para usuario loggeado
const loggedStyle = {
    color: 'white'
}; 

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    // Generamos un estado para el componente
    // y asi controlar si el usuario esta o no loggeado

    const [logged, setLogged] = useState(false);

    return (
        <div style={ logged ? loggedStyle:unloggedStyle}>
            {logged ? 
                (<p>Hola, {props.name} </p>) 
                : 
                (<p>Please Login</p>)
            }
            
            <button onClick={() => {
                console.log('Boton pulsado');
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>

        
    );
}

export default GreetingStyled;
