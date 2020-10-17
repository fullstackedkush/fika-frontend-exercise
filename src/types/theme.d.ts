import 'styled-components/native';

declare module 'styled-components/native' {
  export type ColorFill = 'background' | 'main' | 'error' | 'primary' | 'secondary' | 'tertiary' | 'gradient' | 'icon' | 'shade';
  export type ColorStroke = 'light' | 'dark' | 'disabled' | 'primary' | 'secondary';

  export interface DefaultTheme {
    dark?: boolean;
    colors: {
      fills: {
        [T in ColorFill]: string;
      };
      strokes: {
        [T in ColorStroke]: string;
      }
    };
  }

  export type ThemeName = 'light' | 'dark';

  export type AppThemeProps = {
    [T in ThemeName]: DefaultTheme;
  };

  export type Color = { theme: DefaultTheme };
}
