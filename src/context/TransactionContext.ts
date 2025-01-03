import { createContext } from "react";
import { TransactionContextValues } from "../types/TransactionContextValues";

export const TransactionContext = createContext<TransactionContextValues>({
  transactions: [],
  isFormOpen: false,
  setIsFormOpen: () => [],
  handleAddTransactions: () => [],
});
