import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Clientes from './clientes/Clientes';
import Negocios from './negocios/Negocios';
import Profesional from './profesionales/Profesional';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Clientes />}/>
            <Route path="/negocios" element={<Negocios />}/>
            <Route path="/profesionales" element={<Profesional />}/>
            <Route />
        </Routes>
    </BrowserRouter>
  )
}

export default Router
