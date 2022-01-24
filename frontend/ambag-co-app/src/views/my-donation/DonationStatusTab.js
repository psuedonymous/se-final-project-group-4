import { useEffect, useState } from "react";
import { getDonation } from "../../apis/Get-apis";
import DonationDetailCard from "../../components/DonationDetailCard";

export default function DonationStatusTab({ message }) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const status = urlParams.get('status');

    const [items, setItems] = useState([]);
    const [count, setCount] = useState('');
    const [buyersName, setBuyersName] = useState('');

    useEffect(() => {
        getDonation(status, setItems)
    }, [])
    
    const displayDonation = items.map((item) => {
        return (<DonationDetailCard
            buyersName={buyersName}
            status={status}
            image={item.i_image}
            title={item.i_name}
            price={item.i_price}
            buttonMsg={message} 
            status={status}/>)
    })

    return (
        items.length === 0 ?
            <div className="d-flex justify-content-center align-items-center no-status">
                <div>No {status} donations yet</div>
            </div> : <div className="row">{displayDonation}</div>
    )
}