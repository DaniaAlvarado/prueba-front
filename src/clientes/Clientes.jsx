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
import questions from '../icons/7720439 1.svg';
import founder from '../icons/image 8.svg'

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
          <div className='second_right'>
            <img className='up' src={perfil1} alt="perfil1" />
            <img className='half' src={perfilN} alt="perfilN" />
            <img className='down' src={perfil3} alt="perfil3" />
          </div>
        </section>
        <section className='three'>
          <div>
            <hr />
            <h4 className='tittle'>TodoServy es <br /> Universal</h4>
            <p>En TodoServy, tienes acceso a todos los servicios que ofrecen profesionales, independientes, negocios y empresas en tu ciudad.</p>
            <div>Conoce más aquí</div>
            <hr />
          </div>
          <div>
            <hr />
            <h4 className='tittle'>TodoServy es <br /> Unificado</h4>
            <p>En TodoServy encuentras todas las reseñas y valoraciones que están en internet sobre cada profesional, independiente y negocio registrado.</p>
            <div>Conoce mas aquí</div>
            <hr />
          </div>
        </section>
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
        <section className='six'>
          <h5>Preguntas Frecuentes</h5>
          <div className='questions'>
            <img src={questions} alt="questions" />
            <div>
              <p>¿Para qué sirve TodoServy?</p>
              <hr />
              <p>¿Cómo me registro en TodoServy?</p>
              <hr />
              <p>¿TodoServy funciona a nivel nacional en Colombia?</p>
              <hr />
              <p>¿Cómo verifico mi perfil de usuario en TodoServy?</p>
              <hr />
              <p>¿Cuánto me cuesta solicitar un servicio?</p>
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
        <section className='eight'>
          <img src={founder} alt="cofounder" />
          <div>
            <p className='words'>"TodoServy está hecho para ayudar a encontrar el proveedor de servicios que necesitas, y a los profesionales a digitalizar su oferta de servicios, tener un mayor alcance de clientes y un nuevo canal de ventas."</p>
            <p className='name'>Juan Sarmiento</p>
            <p className='founder'>President & Co-Founder</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default Clientes
