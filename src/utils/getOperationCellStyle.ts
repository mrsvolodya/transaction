export const getOperationCellStyle = (operation: string) => {
  if (operation === "Продажа") {
    return "secondary.main";
  }
  return "secondary.light";
};
