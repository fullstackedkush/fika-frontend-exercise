declare module 'movie-night' {
  import { StackNavigationProp } from '@react-navigation/stack';
  import { ThemeName } from 'styled-components/native';

  export type Genre = {
    readonly id: number;
    readonly name: string;
  };

  export type GenreResponse = {
    data: {
      genres: Genre[];
    }
  };

  export type Movie = {
    readonly id: number;
    readonly title: string;
    readonly poster_path: string;
    readonly genre_ids: number[];
    genres?: Genre[]
  };

  export type MovieResponse = {
    data: {
      results: Movie[];
      page: number;
      total_pages: number;
    }
  };

  export type MovieReturn = {
    movies: Movie[];
    maxPage: number;
    page: number;
  };

  export interface StateContextProps {
    genres: Genre[];
    initiated: boolean;
    switchTheme?: () => void;
    setQuery: (query: string) => void;
    query: string;
    theme: ThemeName;
  }

  export type NavigationProps = {
    Home: undefined;
  };

  export type ScreenProps<T extends keyof NavigationProps> = StackNavigationProp<
  NavigationProps,
  T
  >;
}
