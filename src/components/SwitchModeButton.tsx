import React from 'react';
import {
  IconButton,
  useTheme,
} from '@mui/material';
import DarkIcon from '@mui/icons-material/Brightness4';
import LightIcon from '@mui/icons-material/Brightness7';
import { ColorContext } from '../contexts/ColorContext';

export function SwitchModeButton() {
  const theme = useTheme();
  const { toggleColorMode } = React.useContext(ColorContext);

  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={toggleColorMode}
    >
      {theme.palette.mode === 'dark' ? <LightIcon /> : <DarkIcon />}
    </IconButton>
  );
}
