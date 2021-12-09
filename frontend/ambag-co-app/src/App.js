import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage'
import MyPurchasePage from './pages/MyPurchasePage';
import InboxPage from './pages/InboxPage';
import AboutUsPage from './pages/AboutUsPage';
import ShopBagPage from './pages/ShopBagPage';
import MyProfilePage from './pages/MyProfilePage';
import MyShopPage from './pages/MyShopPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/my-purchase" element={<MyPurchasePage />} />
        <Route path="/inbox" element={<InboxPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/shop-bag" element={<ShopBagPage />} />
        <Route path="/my-profile" element={<MyProfilePage />} />
        <Route path="/my-shop" element={<MyShopPage />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
