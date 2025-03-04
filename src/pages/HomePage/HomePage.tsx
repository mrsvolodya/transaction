import { Box } from "@mui/material";
import { RoleButton } from "../../components/ActionButtons/RoleButton/RoleButton";
import { Outlet } from "react-router-dom";

export function HomePage() {
  return (
    <Box>
      <main>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          width="100vw"
          gap={2}
        >
          <RoleButton role="user" />
          <RoleButton role="admin" />
        </Box>
        <Outlet />
      </main>
    </Box>
  );
}
