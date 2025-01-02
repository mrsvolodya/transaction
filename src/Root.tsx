import { Path } from "./enums/Path";
import { ClientsPage } from "./pages/ClientsPage/ClientsPage";
import { CurrencyPage } from "./pages/CurrencyPage/CurrencyPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { PaydeskPage } from "./pages/PaydeskPage/PaydeskPage";
import { RolePage } from "./pages/RolePage/RolePage";
import { TransactionsPage } from "./pages/TransactionPage/TransactionPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function Root() {
  return (
    <Router basename="/transaction">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:role" element={<RolePage />}>
          <Route path={Path.Transactions} element={<TransactionsPage />} />
          <Route path={Path.Currency} element={<CurrencyPage />} />
          <Route path={Path.Paydesk} element={<PaydeskPage />} />
          <Route path={Path.Clients} element={<ClientsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
