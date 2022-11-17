import React, { useRef } from 'react';
import { Contacto } from '../../../models/contacto.class';

const ContactForm = ({add}) => {

    const nombreRef = useRef('')
    const apellidoRef = useRef('')
    const emailRef = useRef('')

    function addContact(e){
        e.preventDefault()
        const newContact = new Contacto(
            nombreRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            false
        )
        add(newContact)
        nombreRef.current.value = ''
        apellidoRef.current.value = ''
        emailRef.current.value = ''

    }

    return (
        
            <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
                <div className='form-outline flex-fill'>
                    <input ref={nombreRef} id='inputNombre' className='form-control form-control-lg mb-4' required autoFocus placeholder='Nombre'/>
                    <input ref={apellidoRef} id='inputApellido' className='form-control form-control-lg mb-4' required placeholder='Apellido'/>
                    <input ref={emailRef} id='inputEmail' className='form-control form-control-lg mb-4' required placeholder='Email'/>
                </div>
                <button type='submit' className='btn btn-success mx-4'> Agregar contacto </button>
            </form>
        
    );
}

export default ContactForm;
