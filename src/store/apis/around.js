import axios from 'axios';
import { aroundQueries, IMG_PATH_ORG } from 'utils/constants';

export default async function api(payload) {
  const query = aroundQueries[payload.TYPE];
  const http = await axios.get(query);
  const res = JSON.parse(http.request.response);
  const movieList = res.results;
  const result = [];
  movieList.forEach(movie => {
    if (movie.title && movie.backdrop_path) {
      const obj = {};
      obj.title = movie.title;
      obj.backdropPath = `${IMG_PATH_ORG}${movie.backdrop_path}`;
      result.push(obj);
    }
  });
  return result;
}