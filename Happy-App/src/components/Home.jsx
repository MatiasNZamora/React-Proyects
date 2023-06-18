import React from 'react'
import About from './About'
import Contact from './Contact'
import Service from './Service'
import { NavLink } from 'react-router-dom'

/* si sale erroren el package.json   control + s */

const Home = () => {
  return (
    <div>
        <section id='home'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 mt-5'>
                        <h1 className='display-4 fw-bolder mb-4 text-center text-white'> Insertate el Mundo Empresarial </h1>
                        <p className='lead text-center fs-4 mb-5 text-white'>
                            Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. 
                            El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". 
                        </p>
                        <div className='buttons d-flex justify-content-center'>
                            <NavLink to="/contact" className='btn btn-light me-4 rounded-pill px-4 py-2'> Cotización </NavLink>
                            <NavLink to="/service" className='btn btn-outline-light rounded-pill px-4 py-2'> Otros Servicios </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <About/>
        <Service/>
        <Contact/>
    </div>
  )
}

export default Home