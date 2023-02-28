import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import { CookiesProvider } from "react-cookie";
import Login from "./pages/Login";
import Register from "./pages/Register";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route index element={<App />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);
