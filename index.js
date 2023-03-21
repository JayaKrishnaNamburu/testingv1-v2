import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

/* Main removing all changes */

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
