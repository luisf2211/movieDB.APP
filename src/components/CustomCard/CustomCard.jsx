import React from "react";
import './CustomCard.css';

function CustomCard(props) {
  
  const handlerCustomCard = (indice) => {
    props.openModal(); // Abrir modal
    props.setIndicePelicula(indice); // Obtener el indice de la pelicula
  }

  return (
    <>
      <div className="col">
        <div
          className="card"
          style={{
            maxWidth: "320px",
            maxHeight: "760px",
            height: "560px",
          }}
          onClick={() => handlerCustomCard(props.indice)}
        >
          <img src={props.src} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {props.title}</h5>
            <p className="card-text">{props.text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomCard;
