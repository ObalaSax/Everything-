import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import todoStore from "./Redux/TodoStore.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={todoStore}>
      <App />
    </Provider>
  </StrictMode>,
);
