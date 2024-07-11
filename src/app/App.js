import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/main.scss';
import { Home } from "../pages/Home";
import { Header } from "../components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/portfolio" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
