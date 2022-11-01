import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

/* Change from commit 1 */
/* Change from commit 2 */
/* Change from commit 3 */

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
