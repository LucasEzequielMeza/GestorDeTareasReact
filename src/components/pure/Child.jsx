import React, { useRef } from 'react'

const Child = ({ name, send, update }) => {

    const messageRef = useRef()
    const nameRef = useRef('')

    function pressButton () {
        const text = messageRef.current.value
        alert(`Text in Input ${text}`)
    }

    function pressButtonParams (text) {
        alert(`Text: ${text}`)
    }

    function submitName (e) {
        e.preventDefault()
        update(nameRef.current.value)
    }

  return (
    <div>
        <p onMouseOver={() => console.log('On Mouse Over')}>Hola {name}</p>
        <button onClick={() => {
            return console.log('Boton 1 pulsado')
        }}>Boton Uno</button>

        <button onClick={pressButton}>Boton Dos</button>
        <button onClick={() => {
            pressButtonParams('Hola Mundo!!!!')
        }}>Boton Tres</button>
        <input placeholder="Insert a text" 
        onFocus={() => console.log('Input Focused')} 
        onChange={(e) => console.log('Input changed: ', e.target.value)}
        onCopy={(e) => console.log('Copied text from input', e.target.value)}
        ref = {messageRef}
        />
        <button onClick={() => send(messageRef.current.value)} >Send Message</button>
        <div>
            <form onSubmit={submitName}>
                <input ref={nameRef} placeholder="Nuevo nombre"/>
                <button type="submit">Cambiar nombre</button>
            </form>
        </div>
    </div>
  )
}

export default Child