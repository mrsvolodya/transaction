import { Button } from "@mui/material";

type TableActionButtonProps = {
  handleAction: () => void;
  label: string;
  color?: "primary" | "secondary";
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
      sx={{
        borderRadius: "50px",
        "&:hover": {
          backgroundColor:
            color === "primary" ? "primary.main" : "secondary.main",
        },
      }}
      onClick={handleAction}
    >
      {label}
    </Button>
  );
}
