import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import CustomCard from "../../../components/CustomCard/CustomCard";
import { MoviesContext } from "../../../context/MoviesContext/MoviesContext";
import { PopularCardStyles, h1_title } from "./MoviesCardsComponentStyle";
import obtenerPeliculasPopulares from "../../../services/MoviesService/obtenerPeliculasPopulares/obtenerPeliculasPopulares";
import MoviesCustomModal from "../MoviesCustomModal/MoviesCustomModal";
import { useState } from "react";

function MoviesCardsComponent(props) {
  const { moviesContext, dispatch } = useContext(MoviesContext);
  const [indicePelicula, setIndicePelicula] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    obtenerPeliculasPopulares()
      .then((data) => {
        dispatch({
          type: "INSERTAR_PELICULAS_POPULARES",
          peliculas: data.data.results,
        });
      })
      .catch((e) => {
        console.error("Ha ocurrido un error: " + e);
      });
  }, [dispatch]);

  const handlerOpenModal = () => {
    setIsModalOpen(true);
  }

  const handlerCloseModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div
      style={{
        margin: "auto",
      }}
    >
      <h1 style={h1_title}>{props.title}</h1>
      <MoviesCustomModal isModalOpen={isModalOpen} handlerCloseModal={handlerCloseModal} indicePelicula={indicePelicula} />
      <div
        style={PopularCardStyles}
        className="row row-cols-1 row-cols-md-3 g-4"
      >
        {moviesContext.peliculas?.map(
          ({ original_title, poster_path }, index) => {
            return (
              
                <CustomCard
                  key={index}
                  indice={index}
                  openModal={handlerOpenModal}
                  setIndicePelicula={setIndicePelicula}
                  src={`https://image.tmdb.org/t/p/w440_and_h660_face${poster_path}`}
                  title={original_title}
                  //  text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                />
              
            );
          }
        )}
      </div>
    </div>
  );
}

export default MoviesCardsComponent;
