import { useContext } from "react";
import { Box, Stack } from "@mui/material";
import { TransactionsTable } from "../../components/TransactionsTable/TransactionsTable";
import { TableActionButton } from "../../components/ActionButtons/TableActionButton/TableActionButton";
import { TransactionForm } from "../../components/TransactionForm/TransactionForm ";
import { TransactionContext } from "../../context/TransactionContext";

export function TransactionsPage() {
  const { isFormOpen, setIsFormOpen } = useContext(TransactionContext);

  function handleOpenForm() {
    setIsFormOpen(!isFormOpen);
  }
  return (
    <Box>
      {isFormOpen ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <TransactionForm />
        </Box>
      ) : (
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
          <TransactionsTable />
        </Box>
      )}
    </Box>
  );
}
