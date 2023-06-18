import React from 'react'
import { NavLink } from 'react-router-dom'

const Service = () => {
  return (
    <div>
        <section id='service'>
            <div className='container mb-5 pb-5'>
                <div className='row'>
                    <div className='col-12 my-5'>
                        <h3 className='fs-5 text-center mb-0'> Otros Servicios </h3>
                        <h1 className='display-6 text-center mb-4'> Otros <b> Happy </b> Services </h1>
                        <hr className='w-25 mx-auto'/>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-4'>
                        <div className="card p-3" >
                            <div className="card-body text-center">
                                <i className='fa fa-plane fa-4x mb-4 text-primary'/>
                                <h5 className="card-title mb-3 fs-4 fw-bold"> Paquetes Exclusivos </h5>
                                <p className="card-text lead ">
                                    Pasaje más Hotel más Traslados, todo incluido, al mejor precio. Consultá nuestras ofertas.                                    
                                </p>
                                <NavLink to="/deals" className="btn btn-primary"> Ver </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card p-3" >
                            <div className="card-body text-center">
                                <i className='fa fa-handshake-o fa-4x mb-4 text-primary'/>
                                <h5 className="card-title mb-3 fs-4 fw-bold"> Asistencia al Viajero </h5>
                                <p className="card-text lead ">
                                    Happy Assist. Asistencia gratuita durante todo el viaje, en todo lo que necesites.
                                </p>
                                <NavLink to="/assist" className="btn btn-primary"> Ver </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card p-3" >
                            <div className="card-body text-center">
                                <i className='fa fa-car fa-4x mb-4 text-primary'/>
                                <h5 className="card-title mb-3 fs-4 fw-bold"> Traslados Sin Cargo </h5>
                                <p className="card-text lead ">
                                    Te cubrimos los traslados esenciales, para que no tengas que preocuparte por nada.
                                </p>
                                <NavLink to="/transfers" className="btn btn-primary"> Ver </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-4'>
                        <div className="card p-3" >
                            <div className="card-body text-center">
                                <i className='fa fa-lock fa-4x mb-4 text-primary'/>
                                <h5 className="card-title mb-3 fs-4 fw-bold"> Asegurado Siempre </h5>
                                <p className="card-text lead ">
                                    Contamos con todo tipo de seguros, a tu alcance, para que planifiques y viajes tranquilo.
                                </p>
                                <NavLink to="/insurance" className="btn btn-primary"> Ver </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card p-3" >
                            <div className="card-body text-center">
                                <i className='fa fa-suitcase fa-4x mb-4 text-primary'/>
                                <h5 className="card-title mb-3 fs-4 fw-bold"> Alquiler de Equipaje </h5>
                                <p className="card-text lead ">
                                    Contamos con alquiler de equipajes, para que puedas traer todo eso que querés.
                                </p>
                                <NavLink to="/rentbaggage" className="btn btn-primary"> Ver </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card p-3" >
                            <div className="card-body text-center">
                                <i className='fa fa-archive fa-4x mb-4 text-primary'/>
                                <h5 className="card-title mb-3 fs-4 fw-bold"> Servicio de Lockers </h5>
                                <p className="card-text lead ">
                                    Servicio de locker exclusivo y personal en cada aeropuerto. Tus cosas son tuyas, siempre.
                                </p>
                                <NavLink to="/lockers" className="btn btn-primary"> Ver </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export {Service};