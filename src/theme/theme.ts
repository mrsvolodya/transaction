import { createTheme } from "@mui/material";
import { buttonStyles } from "./generalStyles/buttonStyles";
import { orange, red, blue, green, yellow } from "@mui/material/colors";

const baseTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      light: yellow[700],
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
});

export const theme = createTheme(baseTheme, {
  components: {
    MuiButton: buttonStyles,
    MuiTable: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBlockStyle: "none",
          borderCollapse: "separate",
          borderSpacing: "5px",

          [baseTheme.breakpoints.up("sm")]: {
            borderSpacing: "8px",
          },
          [baseTheme.breakpoints.up("md")]: {
            borderSpacing: "10px",
          },
          [baseTheme.breakpoints.up("lg")]: {
            borderSpacing: "12px",
          },
          [baseTheme.breakpoints.up("xl")]: {
            borderSpacing: "14px",
          },

          "& td, & th": {
            padding: "5px",
            fontSize: "12px",

            [baseTheme.breakpoints.up("sm")]: {
              padding: "10px",
              fontSize: "14px",
            },
            [baseTheme.breakpoints.up("md")]: {
              fontSize: "16px",
            },
          },
        },
      },
    },
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
