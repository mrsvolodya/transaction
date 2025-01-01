import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "black",
          height: "35px",
          width: "100px",
          fontSize: "12px",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: "#FF6600",
          "&:hover": {
            backgroundColor: "#ff7f50",
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "& .greenCell": {
            backgroundColor: "#28a745",
          },
          "& .orangeCell": {
            backgroundColor: "#FF6600",
          },
          "& .rateCell": {
            backgroundColor: "#ff7f50",
          },
        },
      },
    },
  },
  palette: {
    primary: { main: "#FF6600" },
    secondary: {
      main: "#FF0707",
    },
    background: {
      default: "#3737E2",
    },
  },
});
