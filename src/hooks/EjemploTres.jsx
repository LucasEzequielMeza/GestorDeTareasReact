/**
 * Ejemplo Hooks:
 * -useState()
 * -useContext()
 */

import React, { useState, useContext } from 'react'

/**
 * 
 * @returns ComponenteUno
 * Dispone de un contexto que va a tener un valor que recibe del padre
 */
const miContexto = React.createContext(null)

const ComponenteUno = () => {
    //Inicializamos un estado vacio que va a rellenarse con los datos del
    //contexto del padre
    const state = useContext(miContexto);
  return (
    <div>
        <h1>El token es: {state.token}</h1>
        {/*Pintamos el componente Dos */}
        <ComponenteDos/>
    </div>
  )
}


const ComponenteDos = () => {


    const state = useContext(miContexto);

  return (
    <div>
        <h2>
            La sesion es: {state.sesion}
        </h2>
    </div>
  )
}


export default function MiComponenteConContexto ()  {

    const estadoInicial = {
        token: '123456789',
        sesion: 1
    }

    //Creamos el estado de este componente
    const [sesionData, setSesionData] = useState(estadoInicial)

    function actualizarSesion() {
        setSesionData({
            token: 'JWT123456789',
            sesion: sesionData.sesion + 1
        })
    }

  return (
    <miContexto.Provider value={sesionData}>
    {/*Tidi ki qye este aca debtri oyede keer kis datis de sesionData */}
    {/*Ademas, si se actualiza, los componentes aca tambien lo actualizan */}
    <h1>Ejemplo de UseState() y useContext()</h1>
    <ComponenteUno/>
    <button onClick={actualizarSesion}>Actualizar sesion</button>

    </miContexto.Provider>
  )
}


