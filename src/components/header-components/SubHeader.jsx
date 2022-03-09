import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ImCart } from 'react-icons/im';


function SubHeader() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = React.useState(location.pathname);
  const selectedPathStyle = { borderBottom: '4px solid #6272a4' };
  const noBorderStyle = { border: 'none' };

  return (
    <section id="iziTechSubHeader">
      <Link
        to="/"
        style={ currentPath === '/' ? selectedPathStyle : noBorderStyle }
      >
        todos os anúncios
      </Link>
      <Link
        to="/selectedAds"
        style={ currentPath === '/selectedAds' ? selectedPathStyle : noBorderStyle }
      >
        anúncios selecionados
      </Link>
      <Link
        to="/cart"
        style={ currentPath === '/cart' ? selectedPathStyle : noBorderStyle }
      >
        <ImCart />
      </Link>
    </section>
  );
}

export default SubHeader;
