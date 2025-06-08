import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { myStore } from "./Redux/Store.ts";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { myStoreApi } from "./Redux/StoreApi.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider api={myStoreApi}>
      <Provider store={myStore}>
        <App />
      </Provider>
    </ApiProvider>
  </StrictMode>,
);
