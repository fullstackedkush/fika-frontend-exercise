import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from '@expo-google-fonts/dev';
import { AppLoading } from 'expo';
import Navigation from './navigation';
import { Themes } from './theme';
import useAppState, { StateContext } from './context/state';

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });
  const state = useAppState();
  const { initiated, theme } = state;

  if (!fontsLoaded || !initiated) return <AppLoading />;

  return (
    <StateContext.Provider value={state}>
      <ThemeProvider theme={Themes[theme]}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </ThemeProvider>
    </StateContext.Provider>
  );
};

export default App;
