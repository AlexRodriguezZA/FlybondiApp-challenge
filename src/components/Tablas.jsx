import React from 'react'
import { v4 as uuidv4 } from 'uuid';


const Tablas = ({vuelo}) => {
  return (
    <div className='mt-3 table-responsive'>

        <table className="table table-striped table-bordered">
    <thead>
        <tr>
        <th scope="col">Origen</th>
        <th scope="col">Destino</th>
        <th scope="col">Fecha</th>
        <th scope="col">Precio</th>
        <th scope="col">Pasajes</th>

        </tr>
    </thead>


    <tbody>
    {vuelo.map( vuelo =>
        <tr >
        <td>{vuelo.origin}</td>
        <td>{vuelo.destination}</td>
        <td>{vuelo.data}</td>
        <td>{vuelo.price}</td>
        <td className='text-center'>{vuelo.availability}</td>

        </tr>
        )}

    </tbody>

    </table>
    </div>
  )
}

export default Tablas