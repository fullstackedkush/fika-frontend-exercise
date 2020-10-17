import React, { useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import { StateContextProps, Genre } from 'movie-night';
import { ThemeName } from 'styled-components/native';
import DataSource from '../dataSource';

export const StateContext = React.createContext<StateContextProps>({
  initiated: false,
  theme: 'light',
  genres: [],
  query: '',
  setQuery: () => {},
});

const useAppState = (): StateContextProps => {
  const [initiated, setInit] = useState<boolean>(false);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [query, setQuery] = useState<string>('');
  const [theme, setTheme] = useState<ThemeName>(Appearance.getColorScheme() || 'light');

  useEffect(() => {
    DataSource.getGenres()
      .then(setGenres)
      .then(() => setInit(true));
  }, []);

  const switchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return {
    genres, initiated, theme, switchTheme, query, setQuery,
  };
};

export default useAppState;
