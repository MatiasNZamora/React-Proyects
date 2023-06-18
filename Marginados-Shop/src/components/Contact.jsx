import React from 'react'

const Contact = () => {
  return (
        <div>
            <section id='contact'>
                <div className='container my-5 py-5'>
                    <div className='row mb-5'>
                        <div className='col-12'>
                            <h1 className='display-6 text-center mb-4'> ¿ Tienes alguna <b> pregunta o sugerencia ? </b></h1>
                            <h3 className='fs-5 text-center mb-0'> Contactate con Nosotros</h3>
                            <hr className='w-25 mx-auto' />
                        </div>
                    </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src='/assets/message-sent.svg' alt='Contact' className='w-75'/>
                    </div>
                    <div className='col-md-6'>
                        <form action=''>
                            <div class="mb-3">
                                <label for="name" class="form-label"> Tu nombre </label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=" John Smith " required/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label"> Tu Email </label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="JohnSmith@example.com" required/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label"> Tu Mensaje </label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Escribe tu mensaje aquí... ' ></textarea>
                            </div>
                            <button type='submit' className='btn btn-outline-primary rounded-pill px-4 '> Enviar Mensaje <i className='fa fa-paper-plane ms-2'/></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export {Contact};