import { useNavigate } from "react-router-dom";
import { Path } from "../enums/Path";

export function useRoleSelection() {
  const navigate = useNavigate();

  function handleRoleSelection(role: string) {
    navigate(`${role}/${Path.Transactions}`);
  }
  return handleRoleSelection;
}
