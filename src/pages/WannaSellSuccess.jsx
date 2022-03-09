import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/WannaSellSuccess.css';
import illustration1 from '../illustrations/successfulPublished.svg';

function WannaSellSuccess() {
  return (
    <div id="wannaSellSuccessPage">
      <main id="wannaSellSuccessPageMain">
        <section id="wannaSellSuccessBlock1">
          <h1>anúncio publicado com sucesso!</h1>
          <span>
            {
              `Em instantes seu anúncio estará no ar. 
              Ficaremos torcendo para que a venda 
              se realize o mais rápido possível! `
            }
          </span>
        </section>
        <section id="wannaSellSuccessBlock2">
          <Link to="/myAds/published">
            olhar meus anúncios
          </Link>
          <Link to="/">
            ir à pagina principal
          </Link>
        </section>
        <img
          id="wannaSellSuccessIllustration1"
          src={ illustration1 }
          alt="Wanna Sell Success Page"
        />
      </main>
    </div>
  );
}

export default WannaSellSuccess;
