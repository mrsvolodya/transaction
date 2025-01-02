import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

export function RolePage() {
  return (
    <Stack>
      <Outlet />
    </Stack>
  );
}
