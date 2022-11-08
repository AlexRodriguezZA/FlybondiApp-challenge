import React from 'react'
import { BsFillExclamationCircleFill } from "react-icons/bs";
import "./Styles/Error.css"

const Error = () => {
    return (
      <div className='error-container'>
          <BsFillExclamationCircleFill />
          Ingrese diferente origen y destino
      </div>
    ) 
  }
  

export default Error