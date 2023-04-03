import React from 'react';
import logo from '../icons/logo_header.svg'
import './header.scss';
import { useNavigate } from 'react-router-dom';
import movile from '../icons/Group 145.svg'

function Header() {

  const navigate = useNavigate();

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
          <button className='left' onClick={() => { navigate('/') }}>Busco un servicio</button>
          <button onClick={() => { navigate('/negocios') }}>Soy un Negocio</button>
          <button className='right' onClick={() => { navigate('/profesionales') }}>Soy un Profesional</button>
        </div>
        <h1>TodoServy <br/>
          Directorio Premium Online</h1>
      </header>
    </>
  )
}

export default Header
