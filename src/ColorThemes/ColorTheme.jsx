// customTheme.js

import { createTheme } from '@mui/material/styles';


// Define your custom theme using createTheme
const ColorTheme = createTheme({
  palette: {
    mode: 'dark', // Set the theme mode to dark
    primary: {
      main: '#fff3e0', // Customize primary color
    },
    secondary: {
      main: '#FFD700', // Customize secondary color
    },
    // You can add more palette options like error, warning, info, etc. here
  },
  // You can add more theme properties like typography, spacing, breakpoints, etc. here
});

// Export the custom theme so that it can be used in other parts of your application
export default ColorTheme;
