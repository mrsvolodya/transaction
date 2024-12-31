import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import TransactionsPage from "./pages/TransactionsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/transactions" element={<TransactionsPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
