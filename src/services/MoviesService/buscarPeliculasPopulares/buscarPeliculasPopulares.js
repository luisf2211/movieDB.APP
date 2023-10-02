import axios from "axios";
import { baseURL, headers } from "../../baseAPI";

function buscarPeliculasPopulares(query) {
  const response = axios.get(`${baseURL}/3/search/movie?query=${query}&include_adult=true&language=en-US&page=1`, {
    headers: headers,
  });

  return response;
}

export default buscarPeliculasPopulares;
