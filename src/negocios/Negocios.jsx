import React from 'react';
import './negocios.scss'
import Header from '../header/Header';
import perfilN from '../icons/perfil_negocio01 1.svg';
import perfilN2 from '../icons/perfil_negocio01 1 (1).svg';

function Negocios() {
  return (
    <>
      <div>
        <Header />
        <section className='negocios'>
          <p className='negocios__parrafo'>Ofrece los servicios de tu negocio, empresa o emprendimiento digital, muestra sus <br /> reseñas y calificaciones, garantiza pagos seguros y gana popularidad en tu ciudad.</p>
          <p className='negocios__canal'>¡Tu nuevo canal de ventas!</p>
          <button className='negocios__button'>¡Registra tu negocio gratis!</button>
        </section>
        <section className='scroll'>
          <img src={perfilN} alt="perfilN" />
          <p>Tu perfil personalizado mostrando categorías, estudios, horarios, reseñas y mucho más</p>
        </section>
        <section className='one'>
          <h2>TodoServy para negocios, <br /> microempresas o negocio virtuales</h2>
          <div className='one__image'>
            <img src={perfilN2} alt="" />
            <div>
              <p>Reclama tu Negocio <br /> ¡Es gratis!</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Negocios
