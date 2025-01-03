import { TransactionContext } from "./TransactionContext.ts";
import { useTransactions } from "../hooks/useTransactions.ts";
import { TransactionProviderProps } from "../types/TransactionProviderProps";
import { useState } from "react";
import { Transaction } from "../types/Transaction.ts";

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const { transactions, setTransactions } = useTransactions();

  function handleAddTransactions(newTransaction: Transaction) {
    setTransactions((prevTransaction) => [...prevTransaction, newTransaction]);
  }

  return (
    <TransactionContext.Provider
      value={{ transactions, handleAddTransactions, isFormOpen, setIsFormOpen }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
