import React from 'react';
import logo from '../icons/logo_header.svg'
import './header.scss';

function Header() {
  return (
    <>
      <header>
        <div className='header'>
          <img src={logo} alt="logo" />
          <div className='header__info'>
            <p>Inscribe tu Negocio</p>
            <p>Hazte Profesional</p>
            <p>Más de TodoServy</p>
            <p className='blog'>Blog</p>
          </div>
          <div className='header__buttons'>
            <p>Registrate</p>
            <button>Inicia sesión</button>
          </div>
        </div>
        <div className='buttons'>
          <button className='left'>Busco un servicio</button>
          <button>Soy un Negocio</button>
          <button className='right'>Soy un Profesional</button>
        </div>
        <h1>TodoServy <br/>
          Directorio Premium Online</h1>
      </header>
    </>
  )
}

export default Header
