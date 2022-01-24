import Popup from "../../components/Popup";

export default function ConfirmDonationPopup({ popupButton, status, donId }) {

    // accept --> update don status
    // decline --> if reserved --> cancelled else popupButton false
    const renderConfirmationMessage = (status) => {
      switch (status) {
        case 'reserved':
          return 'Accept incoming donation?'
        case 'in-process':
          return 'Ready to ship out donation?'
        case 'shipped':
          return 'Successfully delivered donation?'
        default:
          break;
      }
    }

    const handleAccept = (e) => {
      e.preventDefault();
      switch (status) {
        case 'reserved':
          return updateStatus('{in-process}')
        case 'in-process':
          return updateStatus('{shipped}')
        default: 
          break;
      }
    }

    const handleDecline = (e) => {
      e.preventDefault();
      switch (status) {
        case 'reserved':
          return updateStatus('{cancelled}')
        default: 
          return popupButton(false)
      }
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
      }).catch((error) => {
        console.log(error)
      })
    }

    return (
        <Popup>
           <button onClick={() => popupButton(false)} className='btn close-btn'>X</button>
            <div className="confirmation-msg mb-4">
              {renderConfirmationMessage(status)}
            </div>
            <div className="row">
              <div className="col"> 
                <button className="popup-btn col-6" onClick={(e) => {popupButton(false); handleDecline(e)}}>Decline</button>
                <button className="popup-btn col-6" onClick={(e) => {popupButton(false); handleAccept(e)}} >Accept</button>
              </div>
          </div>
        </Popup>
    )
}