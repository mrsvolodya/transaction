import { colors } from "../../../theme/generalStyles/colors.ts";
export const tableRowStyles = {
  styleOverrides: {
    root: {
      "& .greenCell": {
        backgroundColor: colors.greenCell,
      },
      "& .redCell": {
        backgroundColor: colors.redCell,
      },
      "& .rateCell": {
        backgroundColor: colors.rateCell,
      },
    },
  },
};
