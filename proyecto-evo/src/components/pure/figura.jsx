import React, { useState } from 'react';

// Variables de los colores
let red = 0
let green = 0
let blue = 0

// Estilo para el estado inicial del componente

const Normal = {
    height: '255px',
    width: '255px',
    backgroundColor: `black`,
    margin: 'auto',
    color:'white'
}

// Estilo para cuando el cursor este dentro del componente

const Inside = () => {

    red = Math.floor(Math.random() * 256)
    green = Math.floor(Math.random() * 256)
    blue = Math.floor(Math.random() * 256)

    return({
        height: '255px',
        width: '255px',
        backgroundColor: `rgb(${red},${green},${blue})`,
        margin: 'auto'
    })
    
}

// Estilo para cuando el cursor salga del componente o se haga doble clic

const outside = () => {

    return({
        height: '255px',
        width: '255px',
        backgroundColor: `rgb(${red},${green},${blue})`,
        margin: 'auto'
    })
    
}

// Componente

const Figura = () => {

    // Hooks para los estilos y para saber cuando se esta sobre el componente

    const [propStyle, setpropStyle] = useState(Normal);
    const [hovering, setHovering] = useState(false);

    // Funcion para indicar que hacer cuando se esta sobre el componente

    const onFigure = () => {
        setpropStyle(Inside)
        setHovering(true)
    }

    // Funcion para indicar que hacer cuando se esta fuera del componente

    const outFigure = () => {
        setpropStyle(outside)
        setHovering(false)
    }

    return (
        <div style={{color:'black'}}>
        
        {red} , {blue}, {green}
            {hovering ? 
                (<div style={propStyle} onMouseLeave={outFigure} onDoubleClick={outFigure} > ON IT </div>) :
                (<div style={propStyle} onMouseOver={onFigure} > NOT ON IT </div>)
            }

            
        </div>
    );
}

export default Figura;
