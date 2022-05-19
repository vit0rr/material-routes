import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Usuario from "./components/Usuario";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/" exact />
        <Route component={<Sobre/>} path="/sobre" />
        <Route component={<Usuario/>} path="/usuario" />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
