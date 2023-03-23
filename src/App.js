import React from 'react';
import { Route, BrowserRouter, Routes, Router } from 'react-router-dom';
import Cafe from './carta/cafe';
import Carta from './carta/carta';
import NavBar from './navbar/navbar.js';
import Promociones from './promociones/promociones';
import Inicio from './inicio/inicio.js'
import Nosotros from './nosotros/nosotros';
import Bebidas from './carta/bebidas';
import Dulce from './carta/dulce';
import DesayunoMerienda from './carta/desayunomerienda';



const EnrutadorDeApp = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path="/aspen/" element={<Inicio />} exact={true} />
        <Route path="/aspen/carta" element={<Carta />} />
        <Route path="/aspen/cafeteria" element={<Cafe />} />
        <Route path="/aspen/promociones" element={<Promociones />} />
        <Route path="/aspen/nosotros" element={<Nosotros />} />
        <Route path="/aspen/bebidas" element={<Bebidas />} />
        <Route path="/aspen/dulce" element={<Dulce />} />
        <Route path="/aspen/desayunoMerienda" element={<DesayunoMerienda />} />
    </Routes>
    </BrowserRouter>
  );
};

export default EnrutadorDeApp;