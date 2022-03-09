import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/PublishedAndExpiredLinks.css';

function PublishedAndExpiredLinks() {
  const location = useLocation();
  const currentPath = location.pathname;
  const selectedPathStyle = { borderBottom: '4px solid #6272a4' };
  const noBorderStyle = { border: 'none' };

  return (
    <div id="publishedAndExpiredBtnsContainer">
      <Link
        to="/myAds/published"
        style={ currentPath === '/myAds/published' ? selectedPathStyle : noBorderStyle }
      >
        anúncios ativos
      </Link>
      <Link
        to="/myAds/expired"
        style={ currentPath === '/myAds/expired' ? selectedPathStyle : noBorderStyle }
      >
        anúncios expirados
      </Link>
    </div>
  );
}

export default PublishedAndExpiredLinks;
