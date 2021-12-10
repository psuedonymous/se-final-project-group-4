import Popup from "../../components/Popup";
import "./DeleteItemPopup.css";

export default function DeleteItemPopup({deleteButton}) {
    return (
        <div>
            <Popup >
                    <button className="btn close-btn" onClick={()=> deleteButton(false)}>X</button>
                <div className="row mb-3">
                    <h6 className="popup-message">Are you sure you want to delete this item?</h6>
                </div>
                <div className="row">
                    <div className="col"> 
                        <button className="popup-btn col-6">No</button>
                        <button className="popup-btn col-6">Yes</button>
                    </div>
                </div>
            </Popup>
        </div>
    )
}