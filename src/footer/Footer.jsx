import React from 'react';
import './footer.scss';
import founder from '../icons/image 8.svg'
import questions from '../icons/7720439 1.svg';
import arrow from '../icons/Vector (7).svg';

function Footer() {
  return (
    <>
      <section className='six'>
        <h5>Preguntas Frecuentes</h5>
        <div className='questions'>
          <img src={questions} alt="questions" />
          <div className='container'>
            <div className='arrow'>
              <p>¿Para qué sirve TodoServy?</p>
              <img src={arrow} alt="arrow" />
            </div>
            <hr />
            <div className='arrow'>
              <p>¿Cómo me registro en TodoServy?</p>
              <img src={arrow} alt="arrow" />
            </div>
            <hr />
            <div className='arrow'>
              <p>¿TodoServy funciona a nivel nacional en Colombia?</p>
              <img src={arrow} alt="arrow" />
            </div>
            <hr />
            <div className='arrow'>
              <p>¿Cómo verifico mi perfil de usuario en TodoServy?</p>
              <img src={arrow} alt="arrow" />
            </div>
            <hr />
            <div className='arrow'>
              <p>¿Cuánto me cuesta solicitar un servicio?</p>
              <img src={arrow} alt="arrow" />
            </div>
            <hr />
          </div>
        </div>
      </section>
      <section className='seven'>
        <div>
          <p className='number'>+2.000</p>
          <p className='info'>Negocios, Profesionales <br /> e independientes</p>
        </div>
        <div>
          <p className='number'>11</p>
          <p className='info'>Ciudades en <br /> Ecuador</p>
        </div>
        <div>
          <p className='number'>120</p>
          <p className='info'>Tipos de servicios <br /> disponibles</p>
        </div>
      </section>
      <footer className='eight'>
        <img src={founder} alt="cofounder" />
        <div>
          <p className='words'>"TodoServy está hecho para ayudar a encontrar el proveedor de servicios que necesitas, y a los profesionales a digitalizar su oferta de servicios, tener un mayor alcance de clientes y un nuevo canal de ventas."</p>
          <p className='name'>Juan Sarmiento</p>
          <p className='founder'>President & Co-Founder</p>
        </div>
      </footer>
    </>

  )
}

export default Footer
