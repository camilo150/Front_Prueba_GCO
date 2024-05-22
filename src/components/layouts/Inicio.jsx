import React from 'react'
import { Link } from 'react-router-dom'
const Inicio = () => {
  return (
    <>
    <main id='inicio'>
      <h1 id='anuncio-inicio'>¡bienvenido, para poder continuar por favor haz click en el boton de Registrarse!</h1>  
      <button id='boton-inicio'>
      <Link to="/formulario"style={{color:"black",fontSize:"120%"}}>Registrarse</Link>
      </button>
    </main>
    </>
  )
}

export default Inicio