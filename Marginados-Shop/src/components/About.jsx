import React from 'react'
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div id='about'>
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src='/assets/around-the-world.svg' alt='about' className='w-75 mt-0' />
                </div>
                <div className='col-md-6'>
                    <h1 className='display-6 mb-2'> Sobre <b>Nosotros</b></h1>
                    <hr className='w-50'/>
                    <p className='lead mb-4 '> 
                    Somos una un grupo de jóvenes amantes de los viajes. Podemos decirte que entre todo el equipo, hemos recorrido los lugares más increíbles de este planeta.
                    Con nuestra experiencia, queremos asesórate para que tu viaje sea una experiencia maravillosa que te acompañará por el resto de tu vida. 
                    Contamos con todas las herramientas y contactos para conseguirte el mejor precio en los lugares que selecciones. 
                    Nosotros nos adaptamos a tus preferencias, para que tu viaje sea el soñado.
                    Nos apasiona viajar y por eso vamos a ofrecerte la opciona ideal para vos. 
                    </p>
                    <NavLink to="/service" className='btn btn-primary rounded-pill px-4 py-2'> Iniciemos </NavLink>
                    <NavLink to="/contact" className='btn btn-outline-primary rounded-pill px-4 py-2 ms-2'> Contactarse </NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export {About};