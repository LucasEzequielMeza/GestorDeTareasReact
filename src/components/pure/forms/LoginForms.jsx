/**
 * Componente que va a contener un formulario
 * para autenticacion de usuarios
 */

import React, { useState } from 'react'

const LoginForms = () => {

    const initialsCredentials = [
        {
            user: '',
            password: '',
        }
    ]

    const [credentials, setCredentials] = useState(initialsCredentials)

  return (
    <div>LoginForms</div>
  )
}

export default LoginForms