/**
 * Ejemplo de uso del metodo componentWillUnMount para componente clase
 * Ejemplo de uso del hooks para componente funcional
 * (Cudando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react';

export class WillUnMount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparezca')
    }

    render() {
        return (
            <div>
                WillUnMount
            </div>
        );
    }
}


export const WillUnMount = () => {

    useEffect(() => {
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca')
        }
    }, [])

  return (
    <div>WillUnMount</div>
  )
}
