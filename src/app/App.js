import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/main.scss';
import { Home } from "../pages/Home";
import { Error } from "../pages/Error";
import { Header } from "../components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/portfolio" element={<Home />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
