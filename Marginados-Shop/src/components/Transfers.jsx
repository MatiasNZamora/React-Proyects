import React from 'react'

const Transfers = () => {
  return (
    <div id='transfers'>
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src='/assets/order-ride.svg' alt='about' className='w-75 mt-0' />
                </div>
                <div className='col-md-6'>
                    <h1 className='display-6 mb-2'> Servicio de <b>Traslado</b></h1>
                    <hr className='w-50'/>
                    <p className='lead mb-4 '> 
                    Juntos nos vamos a asegurar que llegues siempre a tiempo a tus vuelos. Vamos a incluirte los traslados esenciales a aeropuertos durante todo tu viaje. Utilizamos servicios de traslado que están especializados en viajes a aeropuertos y contemplan los posibles retrasos que puedan surgir mediante uso de aplicaciones satelitales.  
                    Si llegas a necesitar algún transporte extra, solo tenes que comunicarte con nosotros y nos encargamos que tengas tu vehículo cuando lo necesites a un precio diferencial.
                    </p>
{/*                    <button className='btn btn-primary rounded-pill px-4 py-2'> Iniciemos </button>
                    <button className='btn btn-outline-primary rounded-pill px-4 py-2 ms-2'> Contactarse </button>
*/}                
                </div>
            </div>
        </div>
    </div>

)
}

export {Transfers};