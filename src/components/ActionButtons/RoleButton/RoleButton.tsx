import { Button } from "@mui/material";
import { roleColors } from "../../../constants/roleColors";
import { RoleButtonProps } from "../../../types/RoleButtonProps";
import { useRoleSelection } from "../../../hooks/useRoleSelection";

export function RoleButton({ role }: RoleButtonProps) {
  const handleRoleSelection = useRoleSelection();

  return (
    <Button
      variant="contained"
      color={roleColors[role]}
      onClick={() => handleRoleSelection(role)}
    >
      {role.toUpperCase()}
    </Button>
  );
}
