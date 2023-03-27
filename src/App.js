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
        <Route path="/" element={<Inicio />} exact={true} />
        <Route path="/carta" element={<Carta />} />
        <Route path="/cafeteria" element={<Cafe />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/dulce" element={<Dulce />} />
        <Route path="/desayunoMerienda" element={<DesayunoMerienda />} />
      </Routes>
    </BrowserRouter>
  );
};

export default EnrutadorDeApp;