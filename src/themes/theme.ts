import {
  PaletteMode,
  createTheme,
} from '@mui/material';

const theme = (mode: PaletteMode) => createTheme({
  status: { danger: '#e53e3e' },
  palette: {
    primary: { main: '#460065' },
    secondary: { main: '#550065' },
    otherColor: { main: '#1277d9' },
    mode: mode || 'light',
  },
  typography: {
    htmlFontSize: 10, // https://mui.com/material-ui/customization/typography/#html-font-size
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: '62.5%', // 10px simplification
        }
      }
    }
  }
});

export default theme;
