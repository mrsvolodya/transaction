import { Button, Stack, Typography } from "@mui/material";
import { useGoBack } from "../../hooks/useGoBack";

export function PaydeskPage() {
  const handleGoBack = useGoBack();

  return (
    <Stack>
      <Typography>Paydesk Page</Typography>
      <Button variant="contained" onClick={handleGoBack}>
        Назад
      </Button>
    </Stack>
  );
}
