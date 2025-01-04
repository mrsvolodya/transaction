import { CSSObject } from "@mui/material";
import { colors } from "../../../theme/generalStyles/colors.ts";

export const bottomNavigationStyles: CSSObject = {
  position: "fixed",
  bottom: "0",
  right: "0",
  left: "0",
  backgroundColor: colors.backgroundBlue,
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  paddingInline: "10px",
};
