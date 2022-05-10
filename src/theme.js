import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import {cardColor} from './Utils';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: cardColor,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
