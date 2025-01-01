import "./index.css";
import { StrictMode } from "react";
import { theme } from "./theme/theme";
import { CssBaseline } from "@mui/material";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { TransactionProvider } from "./context/TransactionsStore";
import { Root } from "./Root";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TransactionProvider>
        <Root />
      </TransactionProvider>
    </ThemeProvider>
  </StrictMode>
);
