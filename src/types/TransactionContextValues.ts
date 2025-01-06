import { Transaction } from "./Transaction";

export type TransactionContextValues = {
  isFormOpen: boolean;
  handleClose: () => void;
  transactions: Transaction[];
  setIsFormOpen: (v: boolean) => void;
  handleAddTransactions: (v: Transaction) => void;
};
