import React from 'react'
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
        <div className='d-flex align-items-center flex-column' >
          <img src="./images/notFound.jpg" alt=""  />
          <h1 className='display-1'>Page d'erreur</h1>
          <p>Retour à la page d'accueil</p>
          <p> <Link className='btn btn-primary' to="/"> <FaHome/> Accueil</Link></p>
        </div>
    </>
  )
}

export default NotFound