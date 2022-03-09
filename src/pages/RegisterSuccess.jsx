import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RegisterSuccess.css';
import illustration1 from '../illustrations/successfulRegistered.svg';

function RegisterSuccess() {
  return (
    <div id="registerSuccessPage">
      <main id="registerSuccessPageMain">
        <section id="registerSuccessBlock1">
          <h1>registro concluído com sucesso!</h1>
          <span>
            {
              `Em instantes você receberá um e-mail de confirmação 
              e fará, enfim, parte da izi tech!`
            }
          </span>
        </section>
        <section id="registerSuccessBlock2">
          <Link to="/login">
            fazer login!
          </Link>
          <Link to="/">
            ir à pagina principal
          </Link>
        </section>
        <img
          id="registerSuccessIllustration1"
          src={ illustration1 }
          alt="Register Success Page"
        />
      </main>
    </div>
  );
}

export default RegisterSuccess;
