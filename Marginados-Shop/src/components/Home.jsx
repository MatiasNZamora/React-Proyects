import React from 'react'
import {About} from './About'
import {Contact} from './Contact'
import {Service} from './Service'
import { NavLink } from 'react-router-dom'

/* si sale erroren el package.json   control + s */

const Home = () => {
  return (
    <div>
        <section id='home'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 mt-5'>
                        <h1 className='display-4 fw-bolder mb-4 text-center text-white'> Viajá con Happy Travel </h1>
                        <p className='lead text-center fs-4 mb-5 text-white'>
                        Somos la agencia líder en servicios personalizados para tus viajes.
                        Nosotros nos encargamos: vos solamente viajá y disfrutá.
                        Consultá nuestros servicios y probá vos también lo que es ser un Happy Client.
                        </p>
                        <div className='buttons d-flex justify-content-center'>
                            <NavLink to="/about" className='btn btn-light me-4 rounded-pill px-4 py-2'> Quiénes Somos </NavLink>
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

export {Home};