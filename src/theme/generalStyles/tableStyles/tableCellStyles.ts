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
      "@media (max-width: 390px)": {
        padding: "12px",
      },
    },
  },
};
