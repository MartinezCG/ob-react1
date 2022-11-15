import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressBoton(){
        const text = messageRef.current.value
        alert(`Text in input ${text}`)
    }

    function pressBotonParams(text){
        alert(`Text: ${text}`)
    }

    function submitName(e){
        e.preventDefault()
        update(nameRef.current.value)
    }

    return (
        <div style={{background:'Cyan', padding: '30px'}}>
            <p onMouseOver={() => console.log('On Mouse Over')}> 
                Hello, {name} 
            </p>
            <button onClick={() => console.log('Boton 1 pulsado')}>
                Boton 1
            </button>

            <button onClick={pressBoton}>
                Boton 2
            </button>

            <button onClick={() => pressBotonParams('Hello')}>
                Boton 3
            </button>

            <input 
                placeholder = 'Send a text to your father'
                onFocus={() => console.log('Input focused')}
                onChange={(e) => console.log('Input changed:', e.target.value)}
                onCopy={() => console.log('Copied text from input')}
                ref = {messageRef}
            />

            <button onClick={() => send(messageRef.current.value)}>
                Send Message
            </button>

            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='New Name'/>
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
