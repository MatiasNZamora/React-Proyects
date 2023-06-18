import React from 'react'

const Insurance = () => {
  return (
    <div id='insurance'>
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src='/assets/security.svg' alt='about' className='w-75 mt-0' />
                </div>
                <div className='col-md-6'>
                    <h1 className='display-6 mb-2'> Servicio de <b>Seguro</b></h1>
                    <hr className='w-50'/>
                    <p className='lead mb-4 '> 
                    Ya sea que viajes al exterior o que hagas un viaje nacional, contar con una asistencia al viajero siempre te va a convenir.
                    Contratá tu seguro de viaje en nuestra web y viajá seguro. Te servirá para emergencias y cualquier inconveniente médico que tengas durante tu viaje,
                    así como para proteger tu equipaje en caso de pérdida o demora. No hay nada como viajar tranquilo y saber que si algo te pasa, vas a recibir la ayuda necesaria.
                    </p>                
                </div>
            </div>
        </div>
    </div>
  )
}

export {Insurance};