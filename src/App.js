import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdDetails from './pages/AdDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterSuccess from './pages/RegisterSuccess';
import Profile from './pages/Profile';
import EditProfileInfo from './pages/EditProfileInfo';
import WannaSell from './pages/WannaSell';
import WannaSellSuccess from './pages/WannaSellSuccess';
import About from './pages/About';
import FavoriteAds from './pages/FavoriteAds';
// import Cart from './pages/Cart';
import MyPublishedAds from './pages/MyPublishedAds';
import EditPublishedAd from './pages/EditPublishedAd';
import RemovePublishedAd from './pages/RemovePublishedAd';
import MyExpiredAds from './pages/MyExpiredAds';
import NotFound from './pages/NotFound';
import './styles/App.css';
import ServerError from './pages/ServerError';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/adDetails/:productId" element={ <AdDetails /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/register/success" element={ <RegisterSuccess /> } />
      <Route path="/profile" element={ <Profile /> } />
      <Route path="/profile/edit" element={ <EditProfileInfo /> } />
      <Route path="/wannaSell" element={ <WannaSell /> } />
      <Route path="/wannaSell/success" element={ <WannaSellSuccess /> } />
      <Route path="/favoriteAds" element={ <FavoriteAds /> } />
      {/* <Route path="/cart" element={ <Cart /> } /> */}
      <Route path="/myAds/published" element={ <MyPublishedAds /> } />
      <Route path="/myAds/published/edit/:productId" element={ <EditPublishedAd /> } />
      <Route
        path="/myAds/published/remove/:productId"
        element={ <RemovePublishedAd /> }
      />
      <Route path="/myAds/expired" element={ <MyExpiredAds /> } />
      <Route path="/serverError" element={ <ServerError /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
