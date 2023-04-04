import React, { useState } from 'react';
import './agendar.scss';
import slider1 from '../icons/banner-snegocio1.svg';
import slider2 from '../icons/banner-agen-p2.svg';
import slider3 from '../icons/banner-agen-p3.svg';
import slider4 from '../icons/banner-agen-p4.svg';
import arrow from '../icons/Vector (5).svg';
import arrow2 from '../icons/Vector (6).svg';
import icon3 from '../icons/Vector (1).svg'
import icon4 from '../icons/Vector (2).svg';
import icon5 from '../icons/Vector (3).svg';
import icon6 from '../icons/Vector (4).svg';

function Agendar() {

  const images = [slider1, slider2, slider3, slider4]
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    //const [selectedText, setSelectedText] = useState(text[0])

    const newImage = (index, images, next = true) => {
        const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
        setSelectedImage(images[nextIndex]);
        //setSelectedText(text[nextIndex]);
        setSelectedIndex(nextIndex)
    }

    const previousImg = () => {
        newImage(selectedIndex, images, false)
    }

    const nextImg = () => {
        newImage(selectedIndex, images)
    }
  return (
    <>
      <section className='two'>
        <div className='agenda'>
          <h3>Agendamiento <br /> revolucionario online</h3>
          <p>Aumenta tus agendamientos de servicios con nuestra solución innovadora. Con nuestra agenda revolucionaria en línea, tus clientes podrán verificar fácilmente la disponibilidad y programar sus servicios de manera eficiente.</p>
          <p className='optimiza'>¡Optimiza tu negocio y obtén más agendamientos hoy mismo!</p>
          <p>Con nuestro sistema de agendamiento en línea, podrás tener una visión detallada de tu equipo de trabajo y sus disponibilidades. En el perfil de negocio, tus clientes podrán programar sus servicios de acuerdo con la disponibilidad de tu equipo.</p>
          <p>Recuerda que, si eres “Negocio Free”, tienes un límite de agendamientos sobre tus servicios, pero si te haces “Negocio Premium” la cantidad de agendamientos será ilimitada.</p>
        </div>
        <div className='slider'>
          <div className='slider__container container'>
            <img src={arrow} onClick={previousImg} className='slider__arrow' id='before' />
            <div className='slider__body slider__body--show' data-id='1'>
              <figure className='slider__picture'>
                <img src={selectedImage} alt='slider' className='slider__img' />
              </figure>
              <p className='slider__info'>Tu perfil personalizado mostrando categorías, estudios, horarios, reseñas y mucho más</p>
            </div>
            <img src={arrow2} onClick={nextImg} className='slider__arrow' id='next' />
          </div>
        </div>
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
    </>
  )
}

export default Agendar
