import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/ui.css";
import App from "./app/App";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
// TODO: Promo - , holyday - color scheme
