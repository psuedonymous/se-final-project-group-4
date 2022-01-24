import Popup from "../../components/Popup";

export default function ConfirmCompletePurchasePopup({ popupButton, donId }) {

    const handleAccept = (e) => {
      e.preventDefault();
      updateStatus('{completed}')
    }

    const handleDecline = (e) => {
      e.preventDefault();
      popupButton(false)
    }

    const updateStatus = (status) => {
      new Promise((resolve, reject) => {
        const result = fetch(`http://localhost:5000/update-status`, {
          method: 'PUT',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            new_status : status,
            donId: donId
          })
        })
        resolve(result)
        reject('Failed to update status.')
      })
      .catch((error) => {
        console.log(error)
      })
    }

    return (
        <Popup>
           <button onClick={() => popupButton(false)} className='btn close-btn'>X</button>
            <div className="confirmation-msg mb-4">Confirm purchase received.</div>
            <div className="row">
              <div className="col"> 
                <button className="popup-btn col-6" onClick={(e) => {popupButton(false); handleDecline(e)}}>Decline</button>
                <button className="popup-btn col-6" onClick={(e) => {popupButton(false); handleAccept(e)}} >Accept</button>
              </div>
          </div>
        </Popup>
    )
}