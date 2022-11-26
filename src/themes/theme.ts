import {
  PaletteMode,
  createTheme,
} from '@mui/material';

const theme = (mode: PaletteMode) => createTheme({
  status: { danger: '#e53e3e' },
  palette: {
    primary: { main: '#550065' },
    secondary: { main: '#f54500' },
    otherColor: { main: '#1277d9' },
    mode: mode || 'light',
  },
  typography: {
    htmlFontSize: 10, // set 1rem equal to 10px instead of default 16px
    fontSize: 14,
  },
});

export default theme;
