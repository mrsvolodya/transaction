import { colors } from "../colors.ts";
export const tableCellStyles = {
  styleOverrides: {
    root: {
      border: "none",
      whiteSpace: "nowrap",
      backgroundColor: colors.primaryOrange,
      "&:hover": {
        backgroundColor: colors.hoverYellow,
      },
    },
  },
};
