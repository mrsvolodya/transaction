import { useState } from "react";
import { Box, Paper } from "@mui/material";
import { TransactionsTable } from "../../components/TransactionsTable/TransactionsTable";
import { TableActionButton } from "../../components/ActionButtons/TableActionButton/TableActionButton";

export function TransactionsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  console.log(isFormOpen);
  function handleOpenForm() {
    setIsFormOpen(!isFormOpen);
  }
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ width: "100%", marginTop: "50px", paddingInline: "20px" }}
      >
        <TableActionButton label="Пошук" handleAction={handleOpenForm} />
        <TableActionButton label="Додати" handleAction={handleOpenForm} />
      </Box>
      <Paper sx={{ width: "100%", marginTop: "50px" }}>
        <TransactionsTable />
      </Paper>
    </Box>
  );
}
