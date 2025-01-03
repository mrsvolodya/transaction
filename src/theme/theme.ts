import { createTheme } from "@mui/material";
import { palette } from "./palette";
import { buttonStyles } from "./generalStyles/buttonStyles";
import { tableCellStyles } from "../components/TransactionsTable/TableStyles/tableCellStyles";
import { tableRowStyles } from "../components/TransactionsTable/TableStyles/tableRowStyles";
import { bottomNavigationStyles } from "../components/Navigation/NavigationStyles/bottomNavigationStyles";
import { bottomNavigationActionStyles } from "../components/Navigation/NavigationStyles/bottomNavigationActionStyles";

export const theme = createTheme({
  palette,
  components: {
    MuiButton: buttonStyles,
    MuiTableCell: tableCellStyles,
    MuiTableRow: tableRowStyles,
    MuiBottomNavigation: {
      styleOverrides: {
        root: bottomNavigationStyles,
      },
    },

    MuiBottomNavigationAction: bottomNavigationActionStyles,
  },
});
