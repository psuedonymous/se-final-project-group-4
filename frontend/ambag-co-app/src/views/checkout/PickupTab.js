import React from "react";
import { useEffect, useState } from "react";
import { getAddress, getCheckedOutItems, getShopName, getSubtotal } from "../../apis/Get-apis";
import CheckoutCard from "../../components/CheckoutItemCard";

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

    useEffect(() => {
        getCheckedOutItems(items, setCheckedOutItems)
        getSubtotal(items, setSubtotal)
        getAddress(setSellerAddress)
        getShopName(items, setShopName)
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
                totalAmount={subtotal + shippingFee}
            />}
            <div className="row mt-2 m-1">
                <button
                    type="submit"
                    className='btn checkout-btn col-6 col-lg-3 ms-auto float-end m-4'>Place Order
                </button>
            </div>
        </div>
    )
}