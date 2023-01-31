import React, { useState } from 'react'

// Defenimos estilos en constantes:

// ? Estilo para usuario logueado
const loggedStyle = {
    color: 'white'
}

// ? Estilo para usuario no logueado
const unloggedStyle = {
    color: 'red',
    fontWeight: 'bold'
}

const GreetingStyles = (props) => {

    //Generamos un estado para el componente
    //y asi controlar si esta el usuario logueado

    const [logged, setLogged] = useState(false)


  return (
    <div>
        <div style={logged ? loggedStyle : unloggedStyle}>
            <h1>Hola, {props.name} </h1>
            <button onClick={() =>{
                console.log('boton pulsado')
                setLogged(!logged)
            }}>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    </div>
  )
}

export default GreetingStyles