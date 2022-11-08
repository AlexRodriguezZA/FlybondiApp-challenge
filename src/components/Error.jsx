import React from 'react'
import { BsFillExclamationCircleFill } from "react-icons/bs";
import "./Styles/Error.css"

const Error = () => {
    return (
      <div className='error-container'>
          <BsFillExclamationCircleFill />
          Origen y destino son lo mismo
      </div>
    ) 
  }
  

export default Error