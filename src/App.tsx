import {
  Box,
  CssBaseline,
  PaletteMode,
  Stack,
  ThemeProvider,
} from '@mui/material';
import {
  useMemo,
  useState,
} from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';
import Add from './components/Add';
import MyTestComponent from './components/MyTestComponent';
import { SwitchModeButton } from './components/SwitchModeButton';
import { ColorContext } from './contexts/ColorContext';
import theme from './themes/theme';

function App() {
  const [mode, setMode] = useState<PaletteMode>('light');
  const customTheme = theme(mode);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline enableColorScheme />
        <Box bgcolor="background.default" color="text.primary">
          <MyTestComponent />
          <SwitchModeButton />
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar />
            <Feed />
            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default App;
