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
import classNames from "classnames";

export function TransactionsTable() {
  const { transactions } = useContext(TransactionContext);

  return (
    <TableContainer
      sx={{
        maxWidth: "100%",
        overflowX: "auto",
      }}
    >
      <Table
        stickyHeader
        aria-label="sticky table"
        sx={{
          minWidth: 1000,
          boxShadow: "none",
          borderSpacing: "10px",
          borderBlockStyle: "none",
          borderCollapse: "separate",
          backgroundColor: "#3737E2",
          "@media (max-width: 390px)": {
            minWidth: "auto",
            width: "auto",
            fontSize: "12px",
            overflowX: "auto",
            display: "block",
            "& td, & th": {
              fontSize: "12px",
            },
          },
        }}
      >
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column}
                sx={{
                  backgroundColor: "#3737E2",
                  whiteSpace: "nowrap",
                }}
              >
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((trans: Transaction) => {
            const operationClass = classNames("greenCell", {
              redCell: trans.operation === "Продажа",
            });
            return (
              <TableRow hover key={trans.id}>
                <TableCell className={operationClass}>
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
