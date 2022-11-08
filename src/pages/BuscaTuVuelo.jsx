import Formulario from '../components/Formulario'
import "./BuscaTuVuelo.css"
import Tablas from '../components/Tablas'
import Card from "../components/Card.jsx"
import { useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';


const BuscaTuVuelo = () => {


  const [VueloBuscado, setVueloBuscado] = useState({
    origen:"",
    destino: "",
    presupuesto: 0 ,
    date: ""
  })

  const [VuelosData, setVuelosData] = useState([]) //vuelos que traemos de la api


  async function getData(){
    try{
      const response =  await import('../data/dataset.json')  
      setVuelosData(response.default)
 
    }catch(error){
      return error
    }}


  useEffect(() => {
      getData()  
  }, [])

  const vuelos = (VuelosData.filter( v =>{
    if (v.origin === VueloBuscado.origen && v.destination === VueloBuscado.destino && v.price <= VueloBuscado.presupuesto && v.data === VueloBuscado.date) {
      return(v)
      
    }
  }))

  const vuelosInteres = (VuelosData.filter( v =>{
    if (v.origin === VueloBuscado.origen && v.destination === VueloBuscado.destino && v.price <= VueloBuscado.presupuesto && v.data > VueloBuscado.date) {
      return(v)
      
    }
  }))

  return (
    <div className='Vuelo-container'>
        <h1 className='titulo'>Encontra tu <span>vuelo</span> ahora</h1>
        
        <Formulario VueloBuscado={VueloBuscado} setVueloBuscado={setVueloBuscado}/>
        {
          vuelos.length > 0 ? <h3>Vuelo encontrado</h3> : null
        }
        
        {
          vuelos.length > 0 ? <Tablas key={uuidv4()} vuelo={vuelos}/> : null
        }
        

        <div> 
          {
            vuelosInteres.length > 0 ? <h3>Vuelos que le pueden interesar</h3> : null
          }
     
        

          <div className='vuelosInteres-container'>
              {vuelosInteres.map( vuelo => <Card key={uuidv4()} vuelo={vuelo}/>).slice(0,3)}
          </div>
          
        </div>
    </div>
  )
}

export default BuscaTuVuelo