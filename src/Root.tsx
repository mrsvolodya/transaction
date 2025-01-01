import { HomePage } from "./pages/HomePage/HomePage";
import { TransactionsPage } from "./pages/TransactionPage/TransactionPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:role/transactions" element={<TransactionsPage />} />
      </Routes>
    </Router>
  );
}
