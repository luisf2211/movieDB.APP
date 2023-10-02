const baseURL = "https://api.themoviedb.org/";
const apikey = process.env.REACT_APP_API_KEY;

const headers = {
    Authorization: `Bearer ${apikey}`,
};
console.log(process.env.REACT_APP_API_KEY)
export { baseURL, headers};
