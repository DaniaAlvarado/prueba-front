import React from 'react';
import './negocios.scss'
import Header from '../header/Header';
import slider1 from '../icons/perfil_negocio01 1.svg';
import slider2 from '../icons/Mask group (1).svg'
import slider3 from '../icons/Mask group.svg'
import slider4 from '../icons/Group 188.svg'
import slider5 from '../icons/Group 189.svg'
import perfilN2 from '../icons/perfil_negocio01 1 (1).svg';
import arrow from '../icons/Vector (5).svg';
import arrow2 from '../icons/Vector (6).svg';
import Todo from '../todoServyEs/Todo';
import Footer from '../footer/Footer';
import Agendar from '../agendamiento/Agendar';

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
        <section className='slider'>
          <div className='slider__container container'>
            <img src={arrow} className='slider__arrow' id='before'/>
            <div className='slider__body slider__body--show' data-id='1'>
              <figure className='slider__picture'>
                <img src={slider1} className='slider__img' />
              </figure>
              <p className='slider__info'>Tu perfil personalizado mostrando categorías, estudios, horarios, reseñas y mucho más</p>
            </div>
            <div className='slider__body' data-id='2'>
              <figure className='slider__picture'>
                <img src={slider2} className='slider__img' />
              </figure>
              <p className='slider__info'>Obtén un sello de verificación de tus credenciales, licencias y diplomas.</p>
            </div>
            <div className='slider__body' data-id='3'>
              <figure className='slider__picture'>
                <img src={slider3} className='slider__img' />
              </figure>
              <p className='slider__info'>Muestra todos los servicios que prestas, sin importar el tipo.</p>
            </div>
            <div className='slider__body' data-id='4'>
              <figure className='slider__picture'>
                <img src={slider4} className='slider__img' />
              </figure>
              <p className='slider__info'>Tu perfil profesional contará con toda la información, reviews y ratings de toda presencia online</p>
            </div>
            <div className='slider__body' data-id='5'>
              <figure className='slider__picture'>
                <img src={slider5} className='slider__img' />
              </figure>
              <p className='slider__info'>Perfil optimizado para que puedas ofrecer una opción de agendamiento en línea.</p>
            </div>
            <img src={arrow2} className='slider__arrow' id='next'/>
          </div>
        </section>
        <section className='one'>
          <h2>TodoServy para negocios, <br /> microempresas o negocio virtuales</h2>
          <div className='one__image'>
            <img src={perfilN2} alt="" />
            <div>
              <p className='tittleP'>Reclama tu Negocio <br /> ¡Es gratis!</p>
              <p> En TodoServy tenemos la misión de impulsar tu emprendimiento o empresa. Te ayudamos sin costo, solo tienes que reclamar tu negocio y te damos visibilidad frente a clientes potenciales. </p>
              <p> Sube fotos, videos y pide a tus clientes que comenten sobre los servicios del negocio y nosotros nos encargamos de hacerte visible.</p>
              <p> Tendrás un perfil verificado que da presencia online y unificación de todas las valoraciones en una sola plataforma.</p>
              <p>Regístra tu negocio gratis ahora y forma parte del Directorio Premium online revolucionario de Colombia.</p>
              <p className='video'>Ver video tutorial  </p>
              <p className='green'>Inspiramos confianza</p>
              <p>En TodoServy validamos las credenciales, licencias y diplomas de tu negocio para dar más confianza a los usuarios.</p>
              <p>Toda la información en nuestra plataforma universal y unificada serán un motivo de confianza para que tus clientes agenden tus servicios</p>
              <button>Reclama tu negocio</button>
            </div>
          </div>
        </section>
        <Todo />
        <Agendar />
        <Footer />
      </div>
    </>
  )
}

export default Negocios
