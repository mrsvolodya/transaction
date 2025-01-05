import { colors } from "../../../theme/generalStyles/colors.ts";
export const tableStyles = {
  boxShadow: "none",

  borderBlockStyle: "none",
  borderCollapse: "separate",
  backgroundColor: colors.backgroundBlue,
  borderSpacing: {
    xs: "5px",
    sm: "8px",
    md: "10px",
    lg: "12px",
    xl: "14px",
  },

  "& td, & th": {
    padding: {
      xs: "5px",
      sm: "10px",
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
    },
  },
};
