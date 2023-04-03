import React from 'react'
import Header from '../header/Header';
import './clientes.scss'
import plataform from '../icons/mockup_plataforma01 2.svg';
import perfil1 from '../icons/perfil_pofesional01 2.svg';
import perfilN from '../icons/perfil_negocio01 1.svg';
import perfil3 from '../icons/perfil_pofesional02 1.svg'
import icon2 from '../icons/Vector.svg';
import icon3 from '../icons/Vector (1).svg'
import icon4 from '../icons/Vector (2).svg';
import app from '../icons/image 3.svg'
import Footer from '../footer/Footer';
import Todo from '../todoServyEs/Todo';

function Clientes() {
  return (
    <>
      <div >
        <Header />
        <section className='main'>
          <p className='main__parrafo'>Busca, compara, reserva y paga de forma segura todos los servicios de <br /> profesionales, independientes y negocios aquí.</p>
          <button className='main__button'>Regístrate</button>
          <img src={plataform} alt="plataform" />
          <h2>TodoServy para que encuentres <br />
            el servicio que necesitas</h2>
        </section>
        <section className='second'>
          <div className='second__left'>
            <h3>TodoServy Web</h3>
            <p>La plataforma Universal donde podrás encontrar todos los servicios sin importar la categoría o industria.</p>
            <p>Encuentra todas las reseñas y comentarios unificados sobre un profesional, independiente, negocio o emprendimiento digital en TodoServy.</p>
            <div>
              <img src="" alt="" />
              <p>Inspiramos confianza</p>
            </div>
            <p>TodoServy realiza una verificación de credenciales, licencias y diplomas para garantizar la calidad, la experiencia y el conocimiento de los negocios, profesionales e independientes.</p>
            <p>Tu servicio está garantizado.</p>
          </div>
          <div className='second__right'>
            <img className='up' src={perfil1} alt="perfil1" />
            <img className='half' src={perfilN} alt="perfilN" />
            <img className='down' src={perfil3} alt="perfil3" />
          </div>
        </section>
        <Todo/>
        <section className='four'>
          <div>
            <img src={icon2} alt="icon" />
            <p className='tittle2'> Agendamiento en línea <br /> revolucionario</p>
            <p className='description'>Cuentas con un calendario revolucionario online para agendar el servicio que deseas sin intermediarios. Revisas la disponibilidad del profesional, independiente o el negocio y agendas tu servicio.</p>
          </div>
          <div>
            <img src={icon3} alt="icon" />
            <p className='tittle2'>Todos los servicios <br /> a la mano</p>
            <p className='description'>Encuentra en TodoServy los servicios comunes, como jardinería, plomería, veterinaria, electricista, y los menos comunes; como masajes relajantes, empresas de seguridad y más.</p>
          </div>
          <div>
            <img src={icon4} alt="icon" />
            <p className='tittle2'>Pagos 100% seguros</p>
            <p className='description'>Paga por los servicios contratados a través de una plataforma 100% online y segura. También puedes pagar en efectivo, transferencia bancaria y con tarjeta de crédito y débito.</p>
          </div>
        </section>
        <section className='five'>
          <img src={app} alt="appMovile" />
          <div>
            <p className='app'>App Todoservy</p>
            <p className='appp'>Busca, agenda, paga y califica el servicio que necesitas desde la palma de tu mano, con la App TodoServy.​​</p>
            <p className='free'>¡Es 100% gratis!</p>
            <button>Descarga la App</button>
          </div>
        </section>   
        <Footer/>
      </div>
    </>
  )
}

export default Clientes
