import React from 'react';
import './footer.scss';
import founder from '../icons/image 8.svg'

function Footer() {
  return (
    <footer className='eight'>
          <img src={founder} alt="cofounder" />
          <div>
            <p className='words'>"TodoServy está hecho para ayudar a encontrar el proveedor de servicios que necesitas, y a los profesionales a digitalizar su oferta de servicios, tener un mayor alcance de clientes y un nuevo canal de ventas."</p>
            <p className='name'>Juan Sarmiento</p>
            <p className='founder'>President & Co-Founder</p>
          </div>
    </footer>
  )
}

export default Footer
