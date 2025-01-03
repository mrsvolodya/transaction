import { useContext } from "react";
import { Transaction } from "../types/Transaction";
import { normalizeTime } from "../utils/normalizeTime";
import uuid4 from "uuid4";
import { TransactionContext } from "../context/TransactionContext";

export function useOnSubmit() {
  const { handleAddTransactions, setIsFormOpen } =
    useContext(TransactionContext);

  return (newOperation: Transaction) => {
    const newTransaction = {
      ...newOperation,
      time: normalizeTime(),
      id: uuid4(),
    };

    handleAddTransactions(newTransaction);
    setIsFormOpen(false);
  };
}
