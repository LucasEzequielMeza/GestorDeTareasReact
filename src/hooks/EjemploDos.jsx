/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */

import React, { useState, useEffect, useRef } from 'react'


const EjemploDos = () => {
    // Creamos dos contadores distintos cada uno con un estado diferente
    const [contadorUno, setContadorUno] = useState(0)
    const [contadorDos, setContadorDos] = useState(0)
    
    //Vamos a crear una referencia con useRef() para asociar una variable
    //con un elemento del DOM del componente (vista HTML)
    const miRef = useRef()
    
    function incrementarUno () {
        setContadorUno(contadorUno + 1)
    }
    
    function incrementarDos () {
        setContadorDos(contadorDos + 1)
    }
    
    /**
     * Trabajando con useEffect
     */
    
    /**
     *  ? Caso 1: Ejecutar siempre un snippet de codigo
     * Cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que este dentro del useEffect()
     */
    
    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE')
    //     console.log('Mostrando Refencia al elemento del DOM')
    //     console.log(miRef)
    // })

    /**
     *  ? Caso 2: Ejecutar solo cuando cambie el contadorUno
     * Cada vez que haya un cambio en el contadorUno, se ejecuta lo que diga
     * el useEffect() en caso de que cambie el contadorDos, no habra ejecucion
     */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE')
        console.log('Mostrando Refencia al elemento del DOM')
        console.log(miRef)
    }, [contadorUno])

    return (
        <div>
        ***Ejemplo de useState(), useRef(), useEffect()***
        <h2>CONTADOR 1: {contadorUno}</h2>
        <h2>CONTADOR 2: {contadorDos}</h2>
        {/*Elemento referenciado */}
        <h4 ref={miRef}>
            Ejemplo de elemento referenciado
        </h4>
        <div>
            <button onClick={incrementarUno}>Incrementar contador Uno</button>
            <button onClick={incrementarDos}>Incrementar contador Dos</button>
        </div>
    </div>
  )
}

export default EjemploDos