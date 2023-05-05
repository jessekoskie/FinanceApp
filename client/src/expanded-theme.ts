import { PaletteColor } from '@mui/material/styles/createPalette';
// eslint-disable-next-line

declare module '@mui/material/styles/createPalette' {
  interface PaletteColor {
    [PaletteColor: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}
