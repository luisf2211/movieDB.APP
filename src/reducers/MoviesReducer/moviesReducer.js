const moviesReducer = (state, action) => {
  switch (action.type) {
    case "BUSCAR_PELICULA":
      return { ...state, query: action.query };
    
    case "INSERTAR_PELICULAS_POPULARES":
        return { ...state, peliculas: action.peliculas };

    default:
      return { ...state };
  }
};

export default moviesReducer;