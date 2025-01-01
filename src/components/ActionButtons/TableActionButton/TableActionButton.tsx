import { Button } from "@mui/material";

type TableActionButtonProps = {
  handleAction: () => void;
  label: string;
  color?: "primary" | "secondary" | "error";
};

export function TableActionButton({
  handleAction,
  label,
  color = "primary",
}: TableActionButtonProps) {
  return (
    <Button
      variant="contained"
      color={color}
      sx={{ borderRadius: "50px" }}
      onClick={handleAction}
    >
      {label}
    </Button>
  );
}
