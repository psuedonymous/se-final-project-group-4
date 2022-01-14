import Popup from "../../components/Popup";
import "./DeleteItemPopup.css";

export default function DeleteItemPopup({deleteButton, itemId}) {

  const deleteItem = (id) => {
    new Promise((resolve, reject)=>{
      const deleteTodo = fetch(`http://localhost:5000/getItems/${id}`,{
        method: "DELETE"
      })
      resolve(deleteTodo);
      reject("Failed to delete");
    })
    .catch((err) => {
      console.error(err)
    })
  }

    return (
    <div>
        <Popup >
          <button className="btn close-btn" onClick={()=> deleteButton(false)}>X</button>
          <div className="row mb-3">
              <h6 className="popup-message">Are you sure you want to delete this item?</h6>
          </div>

          <div className="row">
              <div className="col"> 
                <button className="popup-btn col-6" onClick={()=> deleteButton(false)}>Cancel</button>
                <button className="popup-btn col-6" onClick={()=> {deleteItem(itemId); deleteButton(false)}} >Yes</button>
              </div>
          </div>
        </Popup>
    </div>
    )
}