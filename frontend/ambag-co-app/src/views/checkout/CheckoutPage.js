import { ShippingMethodIndicator } from "../../assets/ShippingMethod";
import { Outlet, Route, Routes, } from 'react-router-dom';
import { NavBar } from "../../components/NavBar";
import './CheckoutPage.css';

export default function CheckoutPage() {
    return (
        <>
            <NavBar />
            <div className="row m-3">
                <div className="title"> Checkout </div>
                <div className='checkout'>
                    <div className='shipping-method-container'>
                        <ShippingMethodIndicator />
                        <div className='shipping-method mt-4'>
                            <Routes>
                                <Route path='/checkout/deliver'/>
                            </Routes>
                            <Outlet />
                        </div>
                    </div>
                </div>
                <div className="row mt-2 m-1">
                    <button type="submit" className='btn checkout-btn col-6 col-lg-3 ms-auto float-end mt-2'>Place Order</button>
                </div>
            </div>
        </>
    )
}