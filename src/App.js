import React from 'react';
import { Route, BrowserRouter, Routes, Router } from 'react-router-dom';
import LentesSol from './lentesSol/variedad';
import Rayband from './lentesSol/rayband';
import NavBar from './navbar/navbar.js';
import Graduacion from './lentesAumento/graduacion';
import Inicio from './inicio/inicio'
import Nosotros from './accesorios/accesorios';
import Ozono from './lentesSol/ozono';
import Mohs from './lentesSol/mohs';
import ruta66 from './lentesSol/ruta66';
import errorSitio from './promociones/404/ErrorSitio';



const EnrutadorDeApp = () => {
  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path="/vision" element={<Inicio />} exact={true} />
        <Route path="/lentesSol" element={<LentesSol />} />
        <Route path="/rayband" element={<Rayband />} />
        <Route path="/graduacion" element={<Graduacion />} />
        {/* <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/ozono" element={<Ozono />} />
        <Route path="/mohs" element={<Mohs />} />
        <Route path="/ruta66" element={<DesayunoMerienda />} />
        <Route path='*' element={<errorSitio />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default EnrutadorDeApp;