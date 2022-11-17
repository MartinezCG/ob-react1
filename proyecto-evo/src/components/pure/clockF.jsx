import React, { useState, useEffect } from 'react';

const ClockF = () => {

    const [dateActual, setDateActual] = useState({
        fecha: new Date(),
        edad: 0,
        nombre: 'Carlos',
        apellidos: 'Martinez'
    });

    // ! Cuando uses un useEffect que deba actualizar
    // ! de forma automatica sin revisar algun componente
    // ! usa el setInterval() y el clearInterval()

    useEffect(() => {
        const intervalID = setInterval(() => {
            tick()
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
        

    },);

    const tick = () => {
        setDateActual({
            ...dateActual,
            fecha: new Date(),
            edad: dateActual.edad + 1

        })

    }

    return (
        <div>
            <h2>
                Hora Actual:
                {dateActual.fecha.toLocaleTimeString()}
            </h2>
            <h3>{dateActual.nombre} {dateActual.apellidos}</h3>
            <h1>Edad: {dateActual.edad}</h1>
         </div>
    );

    

    
    
}

export default ClockF;
