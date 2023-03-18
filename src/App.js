import React from 'react';
import { Switch,Router, Route, BrowserRouter } from 'react-router-dom';
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
      <NavBar/>
      <Switch>
        <Route path="/" component={Inicio} exact={true}/>
        <Route path="/carta" component={Carta} />
        <Route path="/cafeteria" component={Cafe}/>
        <Route path="/promociones" component={Promociones}/>
        <Route path="/nosotros" component={Nosotros}/>
        <Route path="/bebidas" component={Bebidas}/>
        <Route path="/dulce" component={Dulce} />
        <Route path="/desayunoMerienda" component={DesayunoMerienda}/>
      </Switch>
    </BrowserRouter>


  );
};

export default EnrutadorDeApp;