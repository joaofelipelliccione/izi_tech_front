import React from 'react';
import { Link } from 'react-router-dom';
import illustration1 from '../illustrations/serverError.svg';
import '../styles/ServerError.css';

function ServerError() {
  return (
    <div id="serverErrorPage">
      <main id="serverErrorPageMain">
        <section id="serverErrorBlock1">
          <h1>algo de errado ocorreu!</h1>
          <span>
            {'Isso não estava em nossos planos, '
            + 'mas pode ter certeza que já estamos tentando corrigir!'}
          </span>
        </section>
        <section id="serverErrorBlock2">
          <Link to="/">
            ir à pagina principal e tentar novamente
          </Link>
        </section>
        <img
          id="serverErrorIllustration1"
          src={ illustration1 }
          alt="Sever Error Page"
        />
      </main>
    </div>
  );
}

export default ServerError;
