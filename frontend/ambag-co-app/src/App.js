import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import CatalogPage from './views/catalogpage/CatalogPage'
import MyPurchasePage from './views/MyPurchasePage';
import InboxPage from './views/InboxPage';
import AboutUsPage from './views/AboutUsPage';
import ShopBagPage from './views/ShopBagPage';
import MyProfilePage from './views/MyProfilePage';
import MyShopPage from './views/my-shop/MyShopPage'
import CheckoutPage from './views/checkout/CheckoutPage';
import Deliver from './views/checkout/DeliverTab';
import Pickup from './views/checkout/PickupTab';
import ReservedPurchase from './views/my-purchase/ReservedPurchaseTab';
import InProcessPurchase from './views/my-purchase/InProcessPurchaseTab';
import ShippedPurchase from './views/my-purchase/ShippedPurchaseTab';
import CompletedPurchase from './views/my-purchase/CompletedPurchaseTab';
import CancelledPurchase from './views/my-purchase/CancelledPurchaseTab';
import ReservedDonation from './views/my-donation/ReservedDonationTab';
import InProcesssDonation from './views/my-donation/InProcessDonationTab';
import ShippedDonation from './views/my-donation/ReservedDonationTab';
import CompletedDonation from './views/my-donation/CompletedDonationTab';
import CancelledDonation from './views/my-donation/CancelledDonationTab';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/my-purchase" element={<MyPurchasePage />}>
          <Route path="reserved" element={<ReservedPurchase />}/>
          <Route path="in-process" element={<InProcessPurchase />} />
          <Route path="shipped" element={<ShippedPurchase message='Order Received'  />}/>
          <Route path="completed" element={<CompletedPurchase />}/>
          <Route path="cancelled" element={<CancelledPurchase />}/>
        </Route>
        <Route path="/inbox" element={<InboxPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/shop-bag" element={<ShopBagPage />} />
        <Route path="/my-profile" element={<MyProfilePage />} />
        <Route path="/my-shop" element={<MyShopPage />}>
          <Route path="my-donation/reserved" element={<ReservedDonation  message='Accept Donation' />}/>
          <Route path="my-donation/in-process" element={<InProcesssDonation  message='Ship Donation' />}/>
          <Route path="my-donation/shipped" element={<ShippedDonation />}/>
          <Route path="my-donation/completed" element={<CompletedDonation />}/>
          <Route path="my-donation/cancelled" element={<CancelledDonation />}/>
        </Route>
        <Route path="/checkout" element={<CheckoutPage />}>
          <Route path="deliver" element={<Deliver />}/>
          <Route path="pick-up" element={<Pickup />}/>
        </Route>
      </Routes>
  </BrowserRouter>
  );
}