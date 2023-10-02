import React, { useContext } from "react";
import { MoviesContext } from "../../../context/MoviesContext/MoviesContext";
import "./MoviesCustomModal.css";
function MoviesCustomModal({ isModalOpen, handlerCloseModal, indicePelicula }) {
  const { moviesContext } = useContext(MoviesContext);
  let movieSelected = "";

  if (moviesContext.peliculas) {movieSelected = moviesContext.peliculas[indicePelicula]};

  if (isModalOpen) {
    return (
      <div>
        <div id="myModal" className="CustomModal">
          <div className="modal-custom-content">
            <button
              onClick={handlerCloseModal}
              type="button"
              className="btn-close close"
              aria-label="Close"
            ></button>
            <br />
            <br />
            <div className="container text-center">
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-md-4"
                style={{
                  textAlign: "center",
                }}
              >
                <div
                  className="col"
                  style={{
                    width: "100%",
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movieSelected.backdrop_path}`}
                    alt=""
                    className="imgsize"
                  />
                </div>

                <div
                  className="col"
                  style={{
                    width: "100%",
                  }}
                >
                  <br />
                  <h4>Title: {movieSelected.original_title}</h4>
                  <br />
                  <p>{movieSelected.overview}</p>
                  Release date: {movieSelected.release_date}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return "";
  }
}

export default MoviesCustomModal;
