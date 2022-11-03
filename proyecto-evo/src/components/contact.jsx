import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';


const ContactComponent = ({ contacto }) => {

    return (
        <div>
            <h1>
                Nombre: { contacto.nombre } { contacto.apellido }
            </h1>
                
            <h2>
                Email: { contacto.email }
            </h2>
            <h5>
                Estado: { contacto.conectado ? 'Contacto en linea':'Contacto no disponible' }
            </h5>
        </div>
    );
};


ContactComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactComponent;
