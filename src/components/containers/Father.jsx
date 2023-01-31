import React, { useState } from 'react'
import Child from './../pure/Child'

const Father = () => {

    const [name, setName] = useState('Lucas')

    function showMessage (text) {
        alert(`Message received: ${text}`)
    }

    function updateName (newName) {
      setName(newName)
    }

  return (
    <div>
        <Child name={name} send={showMessage} update={updateName} />
    </div>
  )
}

export default Father