import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import CatalogPage from './views/CatalogPage'
import MyPurchasePage from './views/MyPurchasePage';
import InboxPage from './views/InboxPage';
import AboutUsPage from './views/AboutUsPage';
import ShopBagPage from './views/ShopBagPage';
import MyProfilePage from './views/MyProfilePage';
import MyShopPage from './views/my-shop/MyShopPage'
import CheckoutPage from './views/checkout/CheckoutPage';
import Deliver from './views/checkout/DeliverTab';
import Pickup from './views/checkout/PickupTab';

export default function App() {
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
        <Route path="/my-shop/*" element={<MyShopPage />} />
        <Route path="/checkout" element={<CheckoutPage />}>
          <Route path="deliver" element={<Deliver />}/>
          <Route path="pick-up" element={<Pickup />}/>
        </Route>
      </Routes>
  </BrowserRouter>
  );
}