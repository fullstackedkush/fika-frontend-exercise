import {
  ColorFill, AppThemeProps, DefaultTheme, ColorStroke,
} from 'styled-components/native';

export const dark: DefaultTheme = {
  dark: true,
  colors: {
    fills: {
      background: '#121212',
      main: '#E0E0E0',
      error: '#F47265',
      primary: '#4FB8FF',
      secondary: '#89ED5B',
      tertiary: '#FFD76F',
      gradient: 'linear-gradient(90deg, #F581FF 0%, #FFB388 100%)',
      icon: '#888888',
      shade: '#272727',
    },
    strokes: {
      light: 'rgba(224, 224, 224, .54)',
      dark: 'rgba(18, 18, 18, .24)',
      disabled: 'rgba(224, 224, 224, .54)',
      primary: 'rgba(79,184,255, .54)',
      secondary: 'rgba(137, 237, 91,.54)',
    },
  },
};

export const light: DefaultTheme = {
  colors: {
    fills: {
      background: '#FFFFFF',
      main: '#263238',
      error: '#E74C3C',
      primary: '#2980B9',
      secondary: '#2ECC71',
      tertiary: '#FFBB12',
      gradient: 'linear-gradient(90deg, #D500F9 0%, #FF1744 100%)',
      icon: '#979797',
      shade: '#F0F0F0',
    },
    strokes: {
      light: 'rgba(255, 255, 255, .54)',
      dark: 'rgba(38, 50, 56, .24)',
      disabled: 'rgba(38, 50, 56, .24)',
      primary: 'rgba(41, 128, 185, .54)',
      secondary: 'rgba(46, 204, 113, .54)',
    },
  },
};

export const Themes: AppThemeProps = {
  light,
  dark,
};

export const fill = (theme: DefaultTheme, lightColor: ColorFill, darkColor: ColorFill) => (
  (theme.dark ? theme.colors.fills[darkColor] : theme.colors.fills[lightColor])
);
export const stroke = (theme: DefaultTheme, lightColor: ColorStroke, darkColor: ColorStroke) => (
  (theme.dark ? theme.colors.strokes[darkColor] : theme.colors.strokes[lightColor])
);
