import { useEffect, useState } from "react";
import { transactionsSeed } from "../data/seeds";
import { Transaction } from "../types/Transaction";

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    setTransactions(transactionsSeed);
  }, []);

  return {transactions, setTransactions}
}
