import { useNavigate } from "react-router-dom";
import Popup from "../../components/Popup";
import './ConfirmOrderPopup.css';


export default function ConfirmOrder({ popupButton }) {

    const navigate = useNavigate();

    const navigateToMyPurchasePage = () => {
      navigate('/my-purchase/reserved?status=reserved');
    }

    return (
        <Popup>
            <button onClick={() => popupButton(false)} className='btn close-btn'>X</button>
            <div className="row">
                <div className="confirmation-msg">
                    Succesfully placed your order!
                </div>
                <div className="d-flex justify-content-center">
                    <button onClick={navigateToMyPurchasePage} type="submit" className='btn goto-purchase-btn col-5 mt-4'>Go to My Purchase</button>
                </div>
            </div>
        </Popup>
    )
}