import axios from 'axios';
import {
  Genre, GenreResponse, MovieResponse, MovieReturn,
} from 'movie-night';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '1e6dff9a86b01647898b3afb1cca8855',
  },
});

class DataSource {
  public static getGenres(): Promise<Genre[]> {
    return instance.get<{}, GenreResponse>('genre/movie/list')
      .then(({ data: { genres } }) => genres);
  }

  public static getMovies(page = 1, query?: string): Promise<MovieReturn> {
    const url = query && query.length > 0 ? 'search/movie' : 'movie/now_playing';
    return instance.get<{}, MovieResponse>(url, { params: { page, query } })
      .then(({ data: { results, total_pages: maxPage, page: newPage } }) => ({
        movies: results,
        maxPage,
        page: newPage,
      }));
  }
}

export default DataSource;
