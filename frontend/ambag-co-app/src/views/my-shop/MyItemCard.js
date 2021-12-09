import { Card, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import './MyItemCard.css';


export function MyItemCard(props) {
    return (
        <div className="col-5 col-md-3 col-lg-3">
            <Card className="m-3 col-12 item-card h-10vw shadow">
                <Card.Header>
                    <div className="col-3 col-md-3 col-lg-2 ms-auto">
                        <NavDropdown title={
                            <span><i className='fas fa-ellipsis-v'></i></span>} align="end">
                            <NavDropdown.Item>
                                <Link to='edit-item' className="nav-link nav-drop-link">Edit</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/delete-item' className="nav-link nav-drop-link">Delete</Link>
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
        </div>
    );
};