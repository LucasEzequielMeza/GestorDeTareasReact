/**
 * Ejemplo para entender el uso de props.children
 */

import React from 'react'

const EjemploCuatro = (props) => {
  return (
    <div>
        <h1>***Ejemplo de CHILREN PROPS ***</h1>
        <h2>Nombre: {props.nombre}</h2>
        {/*props.children pintara por defecto aquello que se encuentre
        dentro de las etiquedas de apertura y de cierre de este componente
        desde el componente de orden superior*/}
        {props.children}
    </div>
  )
}

export default EjemploCuatro