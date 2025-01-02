import { Button, Stack, Typography } from "@mui/material";
import { useGoBack } from "../../hooks/useGoBack";

export function CurrencyPage() {
  const handleGoBack = useGoBack();

  return (
    <Stack>
      <Typography>Currency Page</Typography>
      <Button variant="contained" onClick={handleGoBack}>
        Назад
      </Button>
    </Stack>
  );
}
