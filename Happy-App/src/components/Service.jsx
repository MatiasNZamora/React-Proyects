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
                        <h1 className='display-6 text-center mb-4'> Otros <b> Increibles </b> Servicios </h1>
                        <hr className='w-25 mx-auto'/>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-4'>
                        <div className="card p-3" >
                            <div className="card-body text-center">
                                <i className='fa fa-cogs fa-4x mb-4 text-primary'/>
                                <h5 className="card-title mb-3 fs-4 fw-bold"> Full Responsive </h5>
                                <p className="card-text lead ">
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                                <NavLink to="#" className="btn btn-primary"> Ver </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card p-3" >
                            <div className="card-body text-center">
                                <i className='fa fa-mobile fa-4x mb-4 text-primary'/>
                                <h5 className="card-title mb-3 fs-4 fw-bold"> Diseño Responsivo </h5>
                                <p className="card-text lead ">
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                                <NavLink to="#" className="btn btn-primary"> Ver </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card p-3" >
                            <div className="card-body text-center">
                                <i className='fa fa-users fa-4x mb-4 text-primary'/>
                                <h5 className="card-title mb-3 fs-4 fw-bold"> UX / UI </h5>
                                <p className="card-text lead ">
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                                <NavLink to="#" className="btn btn-primary"> Ver </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-4'>
                        <div className="card p-3" >
                            <div className="card-body text-center">
                                <i className='fa fa-laptop fa-4x mb-4 text-primary'/>
                                <h5 className="card-title mb-3 fs-4 fw-bold"> Diseño Web Creativo </h5>
                                <p className="card-text lead ">
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                                <NavLink to="#" className="btn btn-primary"> Ver </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card p-3" >
                            <div className="card-body text-center">
                                <i className='fa fa-file-code-o fa-4x mb-4 text-primary'/>
                                <h5 className="card-title mb-3 fs-4 fw-bold"> Unicos y limpios </h5>
                                <p className="card-text lead ">
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                                <NavLink to="#" className="btn btn-primary"> Ver </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card p-3" >
                            <div className="card-body text-center">
                                <i className='fa fa-star-half-o fa-4x mb-4 text-primary'/>
                                <h5 className="card-title mb-3 fs-4 fw-bold"> Ideas Creativas </h5>
                                <p className="card-text lead ">
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                                <NavLink to="#" className="btn btn-primary"> Ver </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Service;