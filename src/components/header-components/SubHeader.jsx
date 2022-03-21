import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MdFavorite } from 'react-icons/md';


function SubHeader() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = React.useState(location.pathname);
  const selectedPathStyle = { borderBottom: '4px solid #6272a4' };
  const noBorderStyle = { border: 'none' };

  return (
    <section id="iziTechSubHeader">
      <Link
        to="/about"
        style={ currentPath === '/about' ? selectedPathStyle : noBorderStyle }
      >
        como funciona?
      </Link>
      <Link
        to="/"
        style={ currentPath === '/' ? selectedPathStyle : noBorderStyle }
      >
        anúncios
      </Link>
      <Link
        to="/favoriteAds"
        style={ currentPath === '/favoriteAds' ? selectedPathStyle : noBorderStyle }
      >
        <MdFavorite/>
      </Link>
    </section>
  );
}

export default SubHeader;
