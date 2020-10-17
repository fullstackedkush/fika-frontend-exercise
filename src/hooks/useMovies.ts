import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import { Movie, MovieReturn } from 'movie-night';
import { FlatList } from 'react-native';
import { StateContext } from '../context/state';
import DataSource from '../dataSource';

interface UseMovies {
  movies: Movie[];
  flatListRef: React.MutableRefObject<FlatList>;
  nextPage: () => void;
}

const useMovies = (): UseMovies => {
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [maxPage, setMaxPage] = useState<number>(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const { query, genres } = useContext(StateContext);
  const flatListRef: React.MutableRefObject<FlatList> = useRef<any>();

  const setState = ({ maxPage: newMaxPage, movies: newMovies, page: newPage }: MovieReturn) => {
    const withGenres = newMovies.map((movie) => ({
      ...movie,
      genres: genres.filter((v) => movie.genre_ids.includes(v.id)),
    }));
    setMovies(newPage !== 1 ? [...movies, ...withGenres] : withGenres);
    setMaxPage(newMaxPage);
    setLoading(false);
    setPage(newPage);
  };

  const toTop = () => {
    flatListRef?.current?.scrollToOffset({ animated: true, offset: 0 });
  };

  useEffect(() => {
    DataSource.getMovies(1, query)
      .then(setState)
      .then(toTop);
  }, [query]);

  const nextPage = () => {
    if (page !== maxPage && !loading) {
      setLoading(true);
      DataSource.getMovies(page + 1, query)
        .then(setState);
    }
  };

  return { movies, nextPage, flatListRef };
};

export default useMovies;
