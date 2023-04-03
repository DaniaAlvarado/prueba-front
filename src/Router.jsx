import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Clientes from './clientes/Clientes';
import Negocios from './negocios/Negocios';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Clientes />}/>
            <Route path="/negocios" element={<Negocios />}/>
            <Route />
        </Routes>
    </BrowserRouter>
  )
}

export default Router
