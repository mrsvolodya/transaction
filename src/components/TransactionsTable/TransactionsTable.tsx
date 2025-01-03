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
import { tableStyles } from "./TableStyles/tableStyles.ts";
import { TransactionContext } from "../../context/TransactionContext.ts";
import { getOperationCellStyle } from "../../utils/getOperationCellStyle.ts";
import { tableCellHeaderStyles } from "./TableStyles/tableCellHeaderStyles.tsx";

export function TransactionsTable() {
  const { transactions } = useContext(TransactionContext);

  return (
    <TableContainer>
      <Table stickyHeader aria-label="sticky table" sx={tableStyles}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column} sx={tableCellHeaderStyles}>
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((trans: Transaction) => {
            return (
              <TableRow hover key={trans.id}>
                <TableCell
                  sx={{
                    backgroundColor: getOperationCellStyle(trans.operation),
                  }}
                >
                  {trans.operation}
                </TableCell>
                <TableCell>{trans.currency1}</TableCell>
                <TableCell>{trans.amount1}</TableCell>
                <TableCell>{trans.currency2}</TableCell>
                <TableCell>{trans.amount2}</TableCell>
                <TableCell className="rateCell">{trans.rate}</TableCell>
                <TableCell>{trans.time}</TableCell>
                <TableCell>{trans.client}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
