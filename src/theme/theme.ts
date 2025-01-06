import { createTheme } from "@mui/material";
import { buttonStyles } from "./generalStyles/buttonStyles";
import { tableCellStyles } from "./generalStyles/tableStyles/tableCellStyles.ts";
import { tableRowStyles } from "./generalStyles/tableStyles/tableRowStyles.ts";
import { orange, red, blue } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      light: blue[500],
    },
    secondary: {
      main: red[500],
    },
    background: {
      default: blue[500],
    },
  },
  typography: {
    fontSize: 12,
    body1: {
      fontSize: "14px",
    },
    button: {
      fontSize: "18px",
    },
  },
  components: {
    MuiButton: buttonStyles,
    MuiTableCell: tableCellStyles,
    MuiTableRow: tableRowStyles,
  },
});
