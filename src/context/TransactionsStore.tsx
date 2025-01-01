import { TransactionContext } from "./TransactionContext.ts";
import { useTransactions } from "../hooks/useTransactions.ts";
import { TransactionProviderProps } from "../types/TransactionProviderProps";

export function TransactionProvider({ children }: TransactionProviderProps) {
  const { transactions, setTransactions } = useTransactions();

  return (
    <TransactionContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
}
