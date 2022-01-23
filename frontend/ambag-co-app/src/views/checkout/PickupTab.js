import React from "react";
import { useEffect, useState } from "react";
import { getAddress, getCharity, getCheckedOutItems, getShopName, getSubtotal } from "../../apis/Get-apis";
import CheckoutCard from "../../components/CheckoutItemCard";
import ConfirmOrder from "./ConfirmOrderPopup";

export default function Pickup() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const items = urlParams.get('items');

    const shippingFee = 0;
    const [checkedOutItems, setCheckedOutItems] = useState([]);
    const [subtotal, setSubtotal] = useState([])
    const [sellerAddress, setSellerAddress] = useState([]);
    const [shopName, setShopName] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState('Cash on Pick up');
    const [charity, setCharity] = useState([]);
    const [placeOrderBtn, setPlaceOrderBtn] = useState(false);
    const totalAmount = subtotal + shippingFee;

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        placeOrder();
    }

    const placeOrder = () => {
        // add donation 
        new Promise((resolve, reject) => {
            const result = fetch('http://localhost:5000/place-order', {
                method: 'POST',
                body: JSON.stringify({
                    c_id : charity,
                    d_amt: totalAmount,
                    d_dot: new Date(),
                    d_stat: 'reserved'
                }),
                headers: { 'Content-type': 'Application/json' }
            })
            resolve(result)
            reject('Failed to place an order.')
        })
    }

    useEffect(() => {
        getCheckedOutItems(items, setCheckedOutItems)
        getSubtotal(items, setSubtotal)
        getAddress(setSellerAddress)
        getShopName(items, setShopName)
        getCharity(items, setCharity)
    }, []);

    return (
        <div>
            {<CheckoutCard
                address={sellerAddress}
                shopName={shopName}
                items={checkedOutItems}
                paymentMethod={paymentMethod}
                subtotal={subtotal}
                shippingFee={shippingFee}
                totalAmount={totalAmount}
            />}
            <div className="row mt-2 m-1">
                <button
                    type="submit"
                    className='btn checkout-btn col-6 col-lg-3 ms-auto float-end m-4'
                    onClick={(e) => {setPlaceOrderBtn(true); handlePlaceOrder(e)}}>Place Order
                </button>
            </div>
            {placeOrderBtn && <ConfirmOrder popupButton={setPlaceOrderBtn} />}
        </div>
    )
}