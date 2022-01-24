import { useEffect, useState } from "react";
import { getPurchase } from "../../apis/Get-apis";
import PurchaseDetailCard from "../../components/PurchaseDetailCard";

export default function CancelledPurchase({ message }) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const status = urlParams.get('status');

    const [purchases, setPurchases] = useState([]);
    const [count, setCount] = useState('');
    const [storeName, setStoreName] = useState('');

    useEffect(() => {
        getPurchase(status, setPurchases)
    }, [])

    const displayPurchase = purchases.map((item) => {
        return (
            <PurchaseDetailCard 
            status={status}
            title={item.i_name}
            image={item.i_image}
            price={item.i_price}
            buttonMsg={message}
            />
        )
    })
    
    return (
        purchases.length === 0 ?
            <div className="d-flex justify-content-center align-items-center no-status">
                 <div>No {status} orders yet</div>
            </div> : <div className="row">{displayPurchase}</div>
    )
}
