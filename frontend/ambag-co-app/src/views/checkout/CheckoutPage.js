import { ShippingMethodIndicator } from "../../assets/ShippingMethod";
import { Outlet, Route, Routes, useLocation} from 'react-router-dom';
import { NavBar } from "../../components/NavBar";
import './CheckoutPage.css';
import { useEffect, useState } from "react";

export default function CheckoutPage() {
    const location = useLocation();
    const [selectedItems, setSelectedItems] = useState('');

    useEffect(() => {
        setSelectedItems(location.state.checkedItems)
    }, []);

    return (
        <>
            <NavBar />
            <div className="row m-3">
                <div className="title"> Checkout </div>
                <div className='checkout'>
                    <div className='shipping-method-container'>
                        <ShippingMethodIndicator selectedItems={selectedItems} />
                        <div className='shipping-method mt-4'>
                            <Routes>
                                <Route path='/checkout/deliver'/>
                                <Route path='/checkout/pick-up'/>
                            </Routes>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}