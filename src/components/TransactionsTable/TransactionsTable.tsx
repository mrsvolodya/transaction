import { useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { columns } from "../../constants/columns.ts";
import { Transaction } from "../../types/Transaction.ts";
import { TransactionContext } from "../../context/TransactionContext.ts";

export function TransactionsTable() {
  const { transactions } = useContext(TransactionContext);
  return (
    <TableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "transparent" }}>
            {columns.map((column) => (
              <TableCell
                key={column}
                sx={{ whiteSpace: "nowrap", backgroundColor: "default" }}
              >
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((trans: Transaction) => {
            return (
              <TableRow hover key={trans.id}>
                <TableCell className="greenCell">{trans.operation}</TableCell>
                <TableCell className="orangeCell">{trans.currency1}</TableCell>
                <TableCell className="orangeCell">{trans.amount1}</TableCell>
                <TableCell className="orangeCell">{trans.currency2}</TableCell>
                <TableCell className="orangeCell">{trans.amount2}</TableCell>
                <TableCell className="rateCell">{trans.rate}</TableCell>
                <TableCell className="orangeCell">{trans.time}</TableCell>
                <TableCell className="orangeCell">{trans.client}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
