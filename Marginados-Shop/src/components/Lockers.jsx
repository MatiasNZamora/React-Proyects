import React from 'react'

const Lockers = () => {
  return (
    <div id='lockers'>
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src='/assets/travelers.svg' alt='about' className='w-75 mt-0' />
                </div>
                <div className='col-md-6'>
                    <h1 className='display-6 mb-2'> Servicio de <b>Locker</b></h1>
                    <hr className='w-50'/>
                    <p className='lead mb-4 '> 
                    Si en algún momento de tu viaje tenes planeado estar liviano de equipaje, nosotros nos ocupamos de cuidar lo que no lleves con vos.
                    Nuestro equipo piensa en todo. Tenemos tanto lockers en aeropuertos como servicios de guarda equipaje reservados para siempre tener disponibilidad cuando necesites. 
                    En caso que no lo hayamos planeado juntos desde el inicio, sólo tenes que enviarnos un WhatsApp con la ubicación y tiempo que necesitas guardar tu equipaje. 
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

export {Lockers};