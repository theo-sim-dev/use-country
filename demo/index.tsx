import React from "react";
import {createRoot} from "react-dom/client";
import Demo from "./src/Demo";

const App = () => {
  return <Demo />;
};

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}
const root = createRoot(rootElement);
root.render(<App />);
