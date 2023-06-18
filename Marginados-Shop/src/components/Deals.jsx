import React from "react";

const Deals = () => {
    return (
        <div id='deals'>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src='/assets/world.svg' alt='about' className='w-75 mt-0' />
                    </div>
                    <div className='col-md-6'>
                        <h1 className='display-6 mb-2'> Paquetes <b>Exclusivos</b></h1>
                        <hr className='w-50'/>
                        <p className='lead mb-4 '> 
                        ¿Por qué conviene comprar paquetes? <br/><br/>
                        Al comprar tus paquetes turísticos, podés conseguir un valor más bajo en tu viaje, ya que al sumar un alojamiento o un auto, obtenés un descuento significativo.
                        ¡Comprar paquetes de viaje siempre te va a resultar más barato! Podés armar tu paquete a medida, ahorrar en el valor total y gastar esa plata en tu viaje.
                        ¡Aprovechá viajes baratos a un sinfín de destinos! En nuestra web contamos con los mejores paquetes de viajes con todo incluido al mejor precio.
                        </p>              
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Deals};