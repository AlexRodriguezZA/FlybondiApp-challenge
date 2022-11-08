
function CardViaje({vuelo}) {
  const style = {
    margin: '0.5em',
    width: "18em"
  };
  return (
    <div  className="card text-center" style={style}>
      <div className="card-body">
        <h5 className="card-title">Origen: {vuelo.origin} </h5>
        <h5 className="card-title">Destino: {vuelo.destination} </h5>
        <h5 className="card-title">Precio $:{vuelo.price} </h5>
        <h5 className="card-title">Fecha: {vuelo.data} </h5>

        <a href="#" className="btn btn-success">Ver vuelo</a>
      </div>
  </div>
  );
}

export default CardViaje;