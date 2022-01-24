import { Card} from "react-bootstrap";
import './itemCatalog.css';

export function CatalogCard(props) {


    return (
        <div className="col-5 col-md-3 col-lg-3">
            
                <div className="img-box">
                    <Card.Img variant="top" src={props.img} />
                </div>
                <Card.Body>
                    <Card.Title>
                        <div class='row'>

                        <div class="col">
                        
                        {props.name} 
                        </div>
                        <div class="col ">
                        {props.price}
                        </div>
                        </div>
                        </Card.Title>
                  
                </Card.Body>
        </div>
    );
};