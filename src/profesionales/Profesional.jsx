import React from 'react';
import './profesional.scss';
import perfil1 from '../icons/perfil_pofesional01 2.svg';
import profesional from '../icons/mockup_profesional_dispositivos 1.svg'
import Header from '../header/Header';
import Todo from '../todoServyEs/Todo';
import Agendar from '../agendamiento/Agendar';
import Footer from '../footer/Footer';

function Profesional() {
    return (
        <>
            <Header />
            <section className='profesional'>
                <p className='profesional__parrafo'>Si eres profesional o independiente, ofrece tus servicios y muestra tus reseñas <br /> y calificaciones, <b>garantiza pagos seguros y gana popularidad en tu ciudad.</b> </p>
                <button className='profesional__button'>¡Crea tu perfil Profesional/Independiente gratis!</button>
            </section>
            <section className='scroll3'>
                <img src={perfil1} alt="perfilN" />
                <p>Tu perfil personalizado mostrando categorías, estudios, horarios, reseñas y mucho más</p>
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
                    <img  src={profesional} alt="perfil1" />
                </div>
            </section>
            <Todo/>
            <Agendar/>
            <Footer/>
        </>
    )
}

export default Profesional
