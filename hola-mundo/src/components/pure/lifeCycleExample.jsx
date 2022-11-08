/**
 * Ejemplo de componente de tipo clase que dispone de los
 * metodos de ciclo de vida
 */

import React, { Component } from 'react';

class LifeCycleExample extends Component {

    constructor(props){
        super(props)
        console.log('CONSTRUCTOR: cuando se instancia el componente')
    }

    componentWillMount(){
        console.log('WILLMOUNT: Antes del montaje del componente')
    }

    componentDidMount(){
        console.log('DIDMOUNT: Justo al acabar el montaje del componente, antes de renderizarlo')
    }

    componentWillReceiveProps(nextProps){
        console.log('WILLRECEIVEPROPS: Si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState){
        /**
         * Controlar si el componente debe o no actualizarse
         */

        // return true/false
    }

    componentWillUpdate(){
        console.log('WILLUPDATE: Justo antes de actualizarse')

    }

    componentDidUpdate(){
        console.log('DIDUPDATE: Justo despues de actualizarse')

    }

    componentWillUnmount(){
        console.log('WILLUNMOUNT: Justo antes de desaparecer')

    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCycleExample;
