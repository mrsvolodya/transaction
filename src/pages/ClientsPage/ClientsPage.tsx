import { Button, Stack, Typography } from "@mui/material";
import { useGoBack } from "../../hooks/useGoBack";

export function ClientsPage() {
  const handleGoBack = useGoBack();

  return (
    <Stack>
      <Typography>Clients Page</Typography>
      <Button variant="contained" onClick={handleGoBack}>
        Назад
      </Button>
    </Stack>
  );
}
