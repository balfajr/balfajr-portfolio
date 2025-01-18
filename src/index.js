import React from "react";
import ReactDOM from "react-dom/client"; // Perbarui impor ke "react-dom/client"
import './assets/main.css';
import App from "./App";

// Gunakan createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
