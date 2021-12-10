import { Card, NavDropdown } from "react-bootstrap";
import './MyItemCard.css';
import DeleteItemPopup from "./DeleteItemPopup";
import { useState } from "react";

export function MyItemCard(props) {
    const [DeleteButton, setDeleteButton] = useState(false);

    return (
        <div className="col-5 col-md-3 col-lg-3">
            <Card className="m-3 col-12 item-card h-10vw shadow">
                <Card.Header>
                    <div className="col-3 col-md-3 col-lg-2 ms-auto">
                        <NavDropdown title={
                            <span><i className='fas fa-ellipsis-v'></i></span>} align="end">
                            <NavDropdown.Item>
                                <button className="btn edit-btn">Edit</button>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <button className="btn delete-btn" 
                                    onClick={()=> setDeleteButton(true)}>Delete</button>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </Card.Header>
                <div className="img-box">
                    <Card.Img variant="top" src={props.img} />
                </div>
                <Card.Body>
                    <Card.Title> {props.name} </Card.Title>
                    <Card.Subtitle>P{props.price}</Card.Subtitle>
                </Card.Body>
            </Card>
            {DeleteButton && <DeleteItemPopup deleteButton={setDeleteButton} />}
        </div>
    );
};