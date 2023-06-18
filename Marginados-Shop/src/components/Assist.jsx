import React from 'react'

const Assist = () => {
  return (
    <div id='assist'>
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src='/assets/travel-booking.svg' alt='about' className='w-75 mt-0' />
                </div>
                <div className='col-md-6'>
                    <h1 className='display-6 mb-2'> Asistencia al <b>Viajero</b></h1>
                    <hr className='w-50'/>
                    <p className='lead mb-4 '> 
                    Sabemos lo importante que es disfrutar del viaje con la tranquilidad de que todo saldrá bien y que no debemos preocuparnos por nada más.
                    En Happy Travel nos encargamos de que puedas disfrutar al máximo tu viaje, porque sabemos lo que necesitas y nuestro asistentes estarán en todo momento con vos. 
                    </p>             
                </div>
            </div>
        </div>
    </div>
  )
}

export {Assist};