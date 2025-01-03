import { colors } from "../../../theme/generalStyles/colors.ts";

export const formStyles = {
  formContainer: {
    backgroundColor: colors.backgroundYellow,
    paddingBlock: 3,
    paddingInline: 2,
    borderRadius: 1,
    
    maxWidth: 390,
    margin: "auto",
  },
  gridItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  submitButton: {
    display: "flex",
    backgroundColor: colors.greenCell,
    margin: "auto",
    width: "50%",
    color: "white",
    marginTop: "20px",
    "&:hover": {
      backgroundColor: colors.redCell,
    },
  },
};