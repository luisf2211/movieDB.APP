import axios from "axios";
import { baseURL, headers } from "../../baseAPI";

function obtenerPeliculasPopulares() {
  const response = axios.get(`${baseURL}/3/movie/popular?language=en-US&page=1`, {
    headers: headers,
  });

  return response;
}

export default obtenerPeliculasPopulares;
