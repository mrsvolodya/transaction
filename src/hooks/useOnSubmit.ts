import { useContext } from "react";
import { Transaction } from "../types/Transaction";
import { normalizeTime } from "../utils/normalizeTime";
import uuid4 from "uuid4";
import { TransactionContext } from "../context/TransactionContext";

export function useOnSubmit(data: Transaction) {
  const {handleAddTransactions, setIsFormOpen} = useContext(TransactionContext)
  const newTransaction = {
    ...data,
    time: normalizeTime(),
    id: uuid4(),
  };

  handleAddTransactions(newTransaction);
  setIsFormOpen(false);
}