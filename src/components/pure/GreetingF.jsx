import React, {useState} from 'react'

const GreetingF = (props) => {
    const [age, setAge] = useState(25)

    const birthday = () => {
        setAge(age + 1)
    }

  return (
    <div> 
        hola { props.name } desde componente funcional
        <h2>
            Tu edad es de: {age}
        </h2>
        <div>
            <button onClick={birthday}>Cumplir años</button>
        </div>
    </div>
  )
}

export default GreetingF