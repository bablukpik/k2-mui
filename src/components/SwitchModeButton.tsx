import React from 'react';
import {
  IconButton,
  useTheme,
} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ColorContext } from '../contexts/ColorContext';

export function SwitchModeButton() {
  const theme = useTheme();
  const { toggleColorMode } = React.useContext(ColorContext);

  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={toggleColorMode}
    >
      {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}
