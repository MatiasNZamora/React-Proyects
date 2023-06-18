import React from 'react'

const About = () => {
  return (
    <div id='about'>
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src='/assets/about1.jpg' alt='about' className='w-75 mt-0' />
                </div>
                <div className='col-md-6'>
                    <h3 className='fs-5 mb-0'>Hola</h3>
                    <h1 className='display-6 mb-2'> Sobre <b>Nosotros</b></h1>
                    <hr className='w-50'/>
                    <p className='lead mb-4 '> 
                        Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras,
                        al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí".
                        Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras,
                        al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". 
                    </p>
                    <button className='btn btn-primary rounded-pill px-4 py-2'> Iniciemos </button>
                    <button className='btn btn-outline-primary rounded-pill px-4 py-2 ms-2'> Contactarse </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About