import { useState } from "react";
import { Box, Paper, Stack } from "@mui/material";
import { TransactionsTable } from "../../components/TransactionsTable/TransactionsTable";
import { TableActionButton } from "../../components/ActionButtons/TableActionButton/TableActionButton";
import { Navigation } from "../../components/Navigation/Navigation";

export function TransactionsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  console.log(isFormOpen);
  function handleOpenForm() {
    setIsFormOpen(!isFormOpen);
  }
  return (
    <Box>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <TableActionButton label="Пошук" handleAction={handleOpenForm} />
        <TableActionButton label="Додати" handleAction={handleOpenForm} />
      </Stack>
      <Paper sx={{ width: "100%", marginTop: "50px" }}>
        <TransactionsTable />
      </Paper>

      <Navigation />
    </Box>
  );
}
