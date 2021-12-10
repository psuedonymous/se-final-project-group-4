import Popup from "../../components/Popup";
import "./EditItemPopup.css";

export default function EditItemPopup({ editButton }) {
    return (
        <div>
            <Popup >
                <button className="btn close-btn" onClick={() => editButton(false)}>X</button>
                <div className="row">
                    <div className="col-4">
                        <di className="row">
                            <img src="https://www.qoobee.com/wp-content/uploads/QooBee-Stuffed-Toy-2019.jpg" width={150} height={150}></img>
                            <input className="mt-2" type="file"></input>
                        </di>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-6">
                                <input className="form-control" type="text" placeholder="Name"></input>
                            </div>
                            <div className="col-6">
                                <input className="form-control" type="text" placeholder="Price"></input>
                            </div>
                        </div>
                        <select className="form-control mt-2" name="charity">
                            <option value="select-charity">Select Charity</option>
                            <option value="abs">ABS-CBN Handog Kapamilya</option>
                            <option value="tawili">Tawili University</option>
                        </select>
                        <textarea className="form-control mt-2" placeholder="Description" maxlength={150}></textarea>
                    </div>
                </div>
                <div className="row mt-2 m-1">
                    <button className="save-btn col-3 ms-auto">Save</button>
                </div>
            </Popup>
        </div>
    )
}