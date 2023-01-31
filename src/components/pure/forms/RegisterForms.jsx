import React, { useState } from 'react'

const ReisterForms = () => {

    const initialsData = [
        {
            user: '',
            name: '',
            email: '',
            password: '',
        }
    ]

    const [data, setData] = useState(initialsData)

  return (
    <div>ReisterForms</div>
  )
}

export default ReisterForms