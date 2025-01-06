import { createTheme } from "@mui/material";
import { buttonStyles } from "./generalStyles/buttonStyles";
import { orange, red, blue, green } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      light: orange[200],
      dark: blue[500],
    },
    secondary: {
      main: red[500],
      light: green[500],
    },
    background: {
      default: blue[500],
    },
  },

  components: {
    MuiButton: buttonStyles,
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: "none",
          whiteSpace: "nowrap",
          backgroundColor: orange[500],
        },
      },
    },
  },
});
