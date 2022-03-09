import React from 'react';
import Header from '../components/header-components/Header';
import PublishedAndExpiredLinks from '../components/PublishedAndExpiredLinks';
import Footer from '../components/Footer';
import illustration1 from '../illustrations/notFound.svg';
import '../styles/MyExpiredAds.css';

function MyExpiredAds() {
  return (
    <div id="myExpiredAdsPage">
      <Header />
      <main id="myExpiredAdsPageMain">
        <section id="myExpiredAdsContainer1">
          <h2>meus anúncios</h2>
          <div id="myExpiredAdsContainer1-1">
            <PublishedAndExpiredLinks />
            <div id="noExpiredAdsContainer">
              <h2>você ainda não possui anúncios expirados...</h2>
              <img
                src={ illustration1 }
                alt="No expired Ads"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default MyExpiredAds;
