import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactComponent from '../contact';


const ContactList = () => {

    const con = new Contacto('Carlos','Martinez','email@email.com',false)

    return (
        <div>
            <div>
                Contactos conectados:
                <ContactComponent contacto={con} ></ContactComponent>
            </div>
        </div>
    );
};


export default ContactList;
