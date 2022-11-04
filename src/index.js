import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

/* Main removing all changes */

/* Gradier commit 1 */

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
