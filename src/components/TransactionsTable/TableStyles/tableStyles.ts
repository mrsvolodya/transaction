import { colors } from "../../../theme/generalStyles/colors.ts";
export const tableStyles = {
  boxShadow: "none",
  borderSpacing: "10px",
  borderBlockStyle: "none",
  borderCollapse: "separate",
  backgroundColor: colors.backgroundBlue,
  "@media (max-width: 390px)": {
    minWidth: "auto",
    borderSpacing: "5px",
    fontSize: "12px",
    "& td, & th": {
      fontSize: "12px",
    },
  },
};
