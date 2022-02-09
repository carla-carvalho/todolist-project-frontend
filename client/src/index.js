import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/List" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
