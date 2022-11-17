import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ContactComponent = ({ contacto, connected, remove }) => {

    useEffect(() => {
        console.log('Contacto Creado')
        return () => {
            console.log(`Task: ${contacto.nombre} is going to unmount`)
        };
    }, [contacto]);

    function estadoConexion(){
        if(contacto.conectado){
            return(
                <span className='badge bg-success'>
                    Online
                </span>
            )
        } else {
            return(
                <span className='badge bg-danger'>
                    Offline
                </span>
            )
        }      
    }

    function estaConected(){
        if(contacto.conectado){
            return (<i onClick={()=>connected(contacto)} className='bi-toggle2-off task-action' style={{color:'tomato'}}></i>)
        }else{
            return (<i onClick={()=>connected(contacto)} className='bi-toggle2-on task-action' style={{color:'green'}}></i>)  
        }
    }

    return (
            <tr className='fh-normal'>
                <th>
                    <span className='ms-2 me-2'>{ contacto.nombre } { contacto.apellido }</span>
                </th>
                    
                <td>
                    <span className='ms-2 me-2'>{ contacto.email }</span>
                </td>
                <td>
                    { estadoConexion() }
                </td>
                <td className='align-middle'>
                    { estaConected() }
                    <i className='bi-trash task-action' style={{color: 'grey'}} onClick={() => remove(contacto)} ></i>
                </td>
            </tr>
    );
};


ContactComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto).isRequired
};


export default ContactComponent;
