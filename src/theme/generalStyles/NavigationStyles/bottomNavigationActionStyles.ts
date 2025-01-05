import { colors } from "../../../theme/generalStyles/colors.ts";

export const bottomNavigationActionStyles = {
  styleOverrides: {
    root: {
      borderRadius: "40px",
      height: "40px",
      backgroundColor: colors.primaryOrange,
      "&.Mui-selected": {
        backgroundColor: colors.secondaryRed,
      },
      "& .MuiBottomNavigationAction-label": {
        fontSize: "14px",
        "@media (max-width:600px)": {
          fontSize: "12px",
        },
      },
    },
  },
};
