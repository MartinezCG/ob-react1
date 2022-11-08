/**
 * Ejemplo de uso del metodo componentWillUnmount para componente clase
 * Ejemplo de uso del Hook para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component,useEffect } from 'react';

export class WillUnmount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca')
    }

    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        );
    }
}



export const WillUnmountHook = () => {

    useEffect(() => {
        // Aqui no va nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca')
        };
    }, []);

    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    );
}



