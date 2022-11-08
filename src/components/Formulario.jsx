import React from 'react'
import "./Styles/Formulario.css"
import Error from "./Error"
import { BiPaperPlane,BiMap } from "react-icons/bi";

const Formulario = ({VueloBuscado,setVueloBuscado}) => {



const hanldeSubmit = (e)=>{
    
    e.preventDefault()
    

    

}

const handleInput = (e) => {
    setVueloBuscado({
        ...VueloBuscado,
        [e.target.name]: e.target.value
    })

    
}





  return (
    <div className='Formulario-container'>
        <h3>Ingrese los todos datos</h3>
        { 
        VueloBuscado.origen === VueloBuscado.destino ? <Error/> : null
        }

        {
            VueloBuscado.origen === " " && VueloBuscado.destino === " " ? null : null
             
        }        
        
        
        <form action="" className='Formulario' onSubmit={hanldeSubmit}>
            <div className='Selects-container'>  

                <div className='origen-container'>
                    <label htmlFor=""><BiPaperPlane/></label>
                    <select name="origen" id="" onChange={handleInput}>
                        <option value="" selected={true} disabled="disabled">Origen</option>
                        <option value="COR">Cordoba</option>
                        <option value="MDZ">Mendoza</option>
                        <option value="BRC">Bariloche</option>
                        <option value="EPA">EPA</option>
                    </select>
                </div>                  
                
                <div className='destino-container'>
                    <label htmlFor=""><BiMap/></label>

                    <select name="destino" id="" onChange={handleInput}>

                        <option value="" selected={true} disabled="disabled">Destino</option>
                        <option value="COR">Cordoba</option>
                        <option value="MDZ">Mendoza</option>
                        <option value="BRC">Bariloche</option>
                        <option value="EPA">EPA</option>

                    </select>

                </div>
            </div>


            <div className='input-container'>
                <div className='Input-number-container'>
                    <label>Presupuesto: $</label>
                    <input type="Number" name='presupuesto' onChange={handleInput}/>
                </div>

                <div className='Input-Date-container'>
                    <label>Fecha </label>
                    <input type="date" required name='date' min="2021-11-15" max="2022-04-23" onChange={handleInput}/>
                    <span className="validity"></span>

                </div>
            </div>
        </form>
    </div>
  )
}

export default Formulario;