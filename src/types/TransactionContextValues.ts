import { Transaction } from "./Transaction";

export type TransactionContextValues = {
  transactions: Transaction[];
  setTransactions: (v: Transaction[]) => void;
};
