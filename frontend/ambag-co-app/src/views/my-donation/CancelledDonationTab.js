import { useEffect, useState } from "react";
import { getDonation } from "../../apis/Get-apis";
import DonationDetailCard from "../../components/DonationDetailCard";

export default function CancelledDonation({ message }) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const status = urlParams.get('status');

    const [donations, setDonations] = useState([]);
    const [count, setCount] = useState('');
    const [buyersName, setBuyersName] = useState('');

    useEffect(() => {
        getDonation(status, setDonations)
    }, [])

    const displayDonation = donations.map((donation) => {
        return (<DonationDetailCard
            buyersName={buyersName}
            status={status}
            image={donation.i_image}
            title={donation.i_name}
            price={donation.i_price}
            buttonMsg={message}
            donId={donation.d_id}
            />)
    })

    return (
        donations.length === 0 ?
            <div className="d-flex justify-content-center align-items-center no-status">
                <div>No {status} Donations yet</div>
            </div> : <div className="row">{displayDonation}</div>
    )
}