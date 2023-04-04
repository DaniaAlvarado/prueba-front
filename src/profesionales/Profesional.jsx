import React, { useState } from 'react';
import './profesional.scss';
import slider1 from '../icons/perfil_pofesional01 2.svg';
import slider2 from '../icons/Group 191.svg'
import slider3 from '../icons/Group 192.svg'
import slider4 from '../icons/Group 193.svg'
import slider5 from '../icons/Group 189.svg'
import arrow from '../icons/Vector (5).svg';
import arrow2 from '../icons/Vector (6).svg';
import profesional from '../icons/mockup_profesional_dispositivos 1.svg'
import Header from '../header/Header';
import Todo from '../todoServyEs/Todo';
import Agendar from '../agendamiento/Agendar';
import Footer from '../footer/Footer';

function Profesional() {

    const images = [slider1, slider2, slider3, slider4, slider5]
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
            <Header />
            <section className='profesional'>
                <p className='profesional__parrafo'>Si eres profesional o independiente, ofrece tus servicios y muestra tus reseñas <br /> y calificaciones, <b>garantiza pagos seguros y gana popularidad en tu ciudad.</b> </p>
                <button className='profesional__button'>¡Crea tu perfil Profesional/Independiente gratis!</button>
            </section>
            <section className='slider'>
                <div className='slider__container container'>
                    <img src={arrow} onClick={previousImg} className='slider__arrow' id='before' />
                    <div className='slider__body slider__body--show' data-id='1'>
                        <figure className='slider__picture'>
                            <img src={selectedImage} alt='slider' className='slider__img' />
                        </figure>
                        <p className='slider__info'>Tu perfil personalizado mostrando categorías, estudios, horarios, reseñas y mucho más</p>
                    </div>
                    <img src={arrow2} onClick={nextImg} className='slider__arrow' id='next'/>
                </div>
                <h2>TodoServy es visibilidad y confianza <br /> frente a tus clientes</h2>
            </section>
            <section className='double'>
                <div className='double__left'>
                    <h3>TodoServy Web</h3>
                    <p>Todas las reseñas y comentarios de la web unificadas sobre ti, como profesional en TodoServy.</p>
                    <p>Tus clientes podrán encontrar todos los servicios que ofreces y ver las calificaciones en tu perfil.</p>
                    <a href="">Mira como crear tu perfil profesional</a>
                    <div>
                        <img src="" alt="" />
                        <p>Inspiramos confianza</p>
                    </div>
                    <p>En TodoServy validamos tus licencias, diplomas y credenciales para dar más confianza a los usuarios.</p>
                    <p>Toda la información en nuestra plataforma universal y unificada serán un motivo de confianza para que tus clientes agenden tus servicios.</p>
                </div>
                <div className='double__right'>
                    <img src={profesional} alt="perfil1" />
                </div>
            </section>
            <Todo />
            <Agendar />
            <Footer />
        </>
    )
}

export default Profesional
