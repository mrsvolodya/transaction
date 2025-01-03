import { colors } from "../theme/generalStyles/colors.ts";
export const getOperationCellStyle = (operation: string) => {
  if (operation === "Продажа") {
    return colors.redCell;
  }
  return colors.greenCell;
};
