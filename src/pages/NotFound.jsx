import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';
import illustration1 from '../illustrations/notFound.svg';

function NotFound() {
  return (
    <div id="notFoundPage">
      <main id="notFoundPageMain">
        <section id="notFoundBlock1">
          <h1>página não encontrada...</h1>
          <span>
            {
              `o endereço pesquisado não foi encontrado por aqui, 
              verifique-o e tente novamente!`
            }
          </span>
        </section>
        <section id="notFoundBlock2">
          <Link to="/">
            ir à pagina principal
          </Link>
        </section>
        <img
          id="notFoundIllustration1"
          src={ illustration1 }
          alt="Not Found Page"
        />
      </main>
    </div>
  );
}

export default NotFound;
