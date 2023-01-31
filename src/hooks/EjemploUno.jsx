/**
 * Ejemplo de uso del Hook useState
 * 
 * Crear un componente de tipo funcion y acceder a su estado
 * privado a traves de un hook y ademas poder modificarlo
 */

import React, { useState } from 'react'

const EjemploUno = () => {

    //Valor inicial para un contador
    const valorInicial = 0;

    //Valor inicial para una persona
    const personaInicial = {
        nombre: 'Lucas',
        email: 'lucasezequiel9720@hotmail.com'
    }

    /**
     * Queremos que el VALORINICIAL y PERSONAINICIAL sean parte del estado del componente
     * asi poder gestionar su cambio y que este se vea reflejado en la vista del componente
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */

    const [contador, setContador] = useState(valorInicial)
    const [persona, setPersona] = useState(personaInicial)

    /**
     * Funcion para actualizar el estado priovado que contiene el contador
     */

    function incrimentarContador () {
      // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1)
    }

    /**
     * Funcion para actualizar el estado de persona en el componente
     */

    function actualizarPersona() {
      setPersona({
        nombre: 'Florencia',
        email: 'florcita.aiello@hotmail.com'
      })
    }

  return (
    <div>
      <h1>
        ***Ejemplo de useState()***
        <h2>
          Contador: {contador}
        </h2>
        <h2>
          Datos de la persona:
        </h2>
        <h3>Nombre: {persona.nombre}</h3>
        <h3>Email: {persona.email}</h3>
      </h1>
      {/*Bloque de botones para actualizar el estado del componente*/}
      <div>
        <button onClick={incrimentarContador}>Incrementar contador</button>
        <button onClick={actualizarPersona}>Cambiar persona</button>
      </div>
    </div>
  )
}

export default EjemploUno