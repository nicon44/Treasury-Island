import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { dojoConfig } from "../dojoConfig.ts";
import App from "./App.tsx";
import { DojoProvider } from "./dojo/DojoContext.tsx";
import { setup } from "./dojo/setup.ts";
import "./index.css";

async function init() {
  const rootElement = document.getElementById("root");
  if (!rootElement) throw new Error("React root not found");
  const root = ReactDOM.createRoot(rootElement as HTMLElement);

  const setupResult = await setup(dojoConfig);

  if (!setupResult) {
    root.render(<div>Loading....</div>);
  }

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <DojoProvider value={setupResult}>
          <App />
        </DojoProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

init();
