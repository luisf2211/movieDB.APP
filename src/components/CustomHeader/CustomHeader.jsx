import React, { useContext } from "react";
import { useState } from "react";
import { MoviesContext } from "../../context/MoviesContext/MoviesContext";
import buscarPeliculasPopulares from "../../services/MoviesService/buscarPeliculasPopulares/buscarPeliculasPopulares";

function CustomHeader(props) {
  const { dispatch } = useContext(MoviesContext);
  const [query, setQuery] = useState();

  const handlerBuscarPelicula = (e) => {
    e.preventDefault()
    buscarPeliculasPopulares(query).then(data => {
      console.log(data.data.results);
      dispatch({
        type: "INSERTAR_PELICULAS_POPULARES",
        peliculas: data.data.results,
      });
    }).catch((e) => {
      console.error(`Ha ocurrido un error: ${e}`);
    })
  }

  return (
    <nav
      className="navbar"
      style={{
        background: "#042541",
        padding: "20px",
        border: 'none',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
       }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ color: "white", fontFamily: 'Gabarito-Bold', fontSize:'30px'}}>
          {props.title}
        </a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder=""
            aria-label="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={(e) => handlerBuscarPelicula(e)} type="button" class="btn btn-light">Buscar</button>
        </form>
      </div>
    </nav>
  );
}

export default CustomHeader;
