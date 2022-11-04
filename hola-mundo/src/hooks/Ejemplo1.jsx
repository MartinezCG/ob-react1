/**
 * Ejemplo de uso del hook useState
 * 
 * crear un componente de tipo función y acceder a su estado privado
 * a través de un hook y, además, poder modificarlo
 * 
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {

    // Valor inicial para un contador

    const valorInicial = 0;

    // Valor inicial para una persona

    const personaInicial = {
        nombre: 'Carlos',
        email: 'email@email.com'
    }

    /** 
    * Queremos que el VALORINICIAL y PERSONAINICIAL sean
    * parte del estado del componente para asi poder gestionar su cambio
    * y que este se vea reflejado en la vista del componente
    * 
    * const [ nombreVariable, funcionParaCambiar] = useState(valorInicial)
    *  
    */

    const [Contador, setContador] = useState(valorInicial);
    const [Persona, setPersona] = useState(personaInicial);

    /**
     *  Funcion para actualizar el estado privado que tiene el contador
     */
    function incrementarContador () {
       
        // FuncionParaCambiar(nuevoValor)
        setContador( Contador + 1 )
    }


    function actualizarPersona () {
        setPersona(
            {
                nombre: 'Gerardo',
                email: 'Gerardo@email.com'
            }
        )
    }

    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: {Contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: {Persona.nombre}</h3>
            <h4>EMAIL: {Persona.email}</h4>
            {/* Bloque de botones para actualizar el estado del componente */}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;
