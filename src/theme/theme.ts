import { createTheme } from "@mui/material";
import { palette } from "./palette";
import { buttonStyles } from "./generalStyles/buttonStyles";
import { tableCellStyles } from "./generalStyles/tableStyles/tableCellStyles.ts";
import { tableRowStyles } from "./generalStyles/tableStyles/tableRowStyles.ts";
import { bottomNavigationStyles } from "./generalStyles/NavigationStyles/bottomNavigationStyles.ts";
import { bottomNavigationActionStyles } from "./generalStyles/NavigationStyles/bottomNavigationActionStyles.ts";
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
