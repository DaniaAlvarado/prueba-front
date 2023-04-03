import React from 'react';
import './negocios.scss'
import Header from '../header/Header';
import perfilN from '../icons/perfil_negocio01 1.svg';
import perfilN2 from '../icons/perfil_negocio01 1 (1).svg';
import negocio from '../icons/banner-snegocio1.svg';
import icon3 from '../icons/Vector (1).svg'
import icon4 from '../icons/Vector (2).svg';
import icon5 from '../icons/Vector (3).svg';
import icon6 from '../icons/Vector (4).svg';
import Todo from '../todoServyEs/Todo';
import Footer from '../footer/Footer';

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
        <section className='two'>
          <h3>Agendamiento <br /> revolucionario online</h3>
          <p>Aumenta tus agendamientos de servicios con nuestra solución innovadora. Con nuestra agenda revolucionaria en línea, tus clientes podrán verificar fácilmente la disponibilidad y programar sus servicios de manera eficiente.</p>
          <p className='optimiza'>¡Optimiza tu negocio y obtén más agendamientos hoy mismo!</p>
          <p>Con nuestro sistema de agendamiento en línea, podrás tener una visión detallada de tu equipo de trabajo y sus disponibilidades. En el perfil de negocio, tus clientes podrán programar sus servicios de acuerdo con la disponibilidad de tu equipo.</p>
          <p>Recuerda que, si eres “Negocio Free”, tienes un límite de agendamientos sobre tus servicios, pero si te haces “Negocio Premium” la cantidad de agendamientos será ilimitada.</p>
          <img src={negocio} alt="banner" />
          <div className='service'>
            <div>
              <img src={icon3} alt="icon" />
              <p className='tittle2'>Todos los servicios a la mano</p>
              <p className='description'>Tus servicios están a la mano de tus clientes gracias a nuestra plataforma única del mercado.</p>
              <p className='description'> Puedes ofrecer cualquier tipo de servicios, desde jardinería a domicilio, peluquería de perros, masajes reductores, finanzas, seguridad y cualquier otro oficio que quieras.</p>
            </div>
            <div>
              <img src={icon4} alt="icon" />
              <p className='tittle2'>Pagos 100% seguros</p>
              <p className='description'>Tus clientes pagarán a través de una plataforma 100% segura, a través de efectivo, transferencias bancarias o tarjetas de crédito y débito.</p>
            </div>
          </div>
          <div className='cuadrado'>
              <img src={icon5} alt="corona" />
              <p className='beneficio'>Obtén todos los beneficios</p>
              <p className='premium'>¡Únete a Premium!</p>
              <div className='registro'>
                <p>Si te registras como profesional o independiente y accedes a Premium, tu visibilidad aumentará significativamente: aparecerás en los primeros resultados dentro de TodoServy.</p>
                <p>Con tu perfil premium tendrás un identificador en tu nombre que demuestra que eres uno de los más calificados para ese servicio. Miles de usuarios están esperando para contratarte.</p>
              </div>
              <nav className='plus'>
                <aside>
                  <img src={icon6} alt="plus" />
                  <p>Verificación de credenciales, licencias y diplomas</p>
                </aside>
                <aside>
                  <img src={icon6} alt="plus" />
                  <p>Visibilidad premium</p>
                </aside>
                <aside>
                  <img src={icon6} alt="plus" />
                  <p>Ofertar servicios ilimitados</p>
                </aside>
                <aside>
                  <img src={icon6} alt="plus" />
                  <p>Botón que direcciona a WhatsApp</p>
                </aside>
                <aside>
                  <img src={icon6} alt="plus" />
                  <p>Acceso ilimitado al calendario y agendamiento online</p>
                </aside>
                <aside>
                  <img src={icon6} alt="plus" />
                  <p>Recibe pagos 100% seguros a través de TodoServy</p>
                </aside>
              </nav>
              <button>¡Únete a Premium!</button>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  )
}

export default Negocios
