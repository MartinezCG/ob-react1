import React, { useState, useEffect } from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';


const ContactList = () => {

    const con = new Contacto('Carlos','Martinez','email@email.com',false)
    const con1 = new Contacto('Camila','Martinez','Cami-email@email.com',true)
    const con2 = new Contacto('Carlos','Martinez Jr.','Jr-email@email.com',false)

    const [contacts, setContacts] = useState([con, con1, con2]);
    const [loading, setLoading] = useState(true);
    

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Contacts State has been modified')
        setLoading(false)
        return () => {
            console.log('Contacts List component is going to Unmount...')
        };
    }, [contacts]);

    function deleteContact(contact){
        console.log('Delete:', contact.nombre)
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts.splice(index,1)
        setContacts(tempContacts)
    }

    function online(contact){
        console.log('Conectar:', contact)
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts[index].conectado= !tempContacts[index].conectado
        setContacts(tempContacts)
    }

    function addContact (contact){
        console.log('Conectar:', contact)
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts.push(contact)
        setContacts(tempContacts)
    }




    return (
        <div className='table-responsive'>
            <table className="table align-middle mb-5" style={{color:"white"}}>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contacto, index) => {
                        return(<ContactComponent 
                                    key={index}
                                    contacto={contacto}
                                    remove = {deleteContact}
                                    connected = {online}>
                                </ContactComponent>)
                        
                            }
                    )}
                    
                   
                </tbody>
            </table>
            <ContactForm add={addContact}></ContactForm>
        </div>
    );
};


export default ContactList;
