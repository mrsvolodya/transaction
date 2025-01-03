import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
export function RolePage() {
  return (
    <Stack>
      <Outlet />
      <Navigation />
    </Stack>
  );
}
