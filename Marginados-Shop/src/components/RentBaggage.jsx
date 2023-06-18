import React from 'react'

const RentBaggage = () => {
  return (
    <div id='rentbaggage'>
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src='/assets/succesful-purchase.svg' alt='about' className='w-75 mt-0' />
                </div>
                <div className='col-md-6'>
                    <h1 className='display-6 mb-2'> Alquiler de <b>Equipaje</b></h1>
                    <hr className='w-50'/>
                    <p className='lead mb-4 '> 
                    Con Happy Travel podés aprovechar para comprar regalos a tus seres queridos y no preocuparte dónde llevarlos si no contás con equipaje extra para todo lo que compraste y querés llevar.
                    Con nuestro servicio, podés alquilar tu equipaje y devolverlo en la sucursal al llegar a tu destino.
                    Tenemos artículos de primera línea a precios muy accesibles.    
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

export {RentBaggage};