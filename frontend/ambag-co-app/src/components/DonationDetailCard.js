import { useState } from 'react';
import './DonationDetailCard.css';
import ConfirmDonationPopup from '../views/my-donation/ConfirmDonationPopup';

export default function DonationDetailCard(props) {
    const [acceptBtn, setAcceptBtn] = useState(false);

    return (
        <div className="col-11 col-md-6 col-lg-3  m-2">
            <div className="row order-detail-card">
                <div className="row m-1 mt-2">
                    <div className=" col-6 status">  <p>{props.buyersName}</p> </div>
                    <div className=" col-6 status">  <p className="float-end">{props.status.toUpperCase()}</p> </div>
                </div>
                <div>
                    <div className="row mt-3">
                        <div className="col-4">
                            <img src={props.image} height={75} width={75} ></img>
                        </div>
                        <div className=" col-8 status">
                            <div className="row">
                                <p>{props.title}</p>
                                <p>{props.price}</p>
                                {/* <a href="#"><p className="more-items mt-2">View {props.count} more items.</p></a> */}
                            </div>
                            {props.buttonMsg != null ? <button 
                            className="btn accept-btn float-end m-2"
                            onClick={() => setAcceptBtn(true)}>{props.buttonMsg}</button> : ''}
                            {acceptBtn && <ConfirmDonationPopup 
                                popupButton={setAcceptBtn} 
                                status={props.status}
                                donId={props.donId}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}