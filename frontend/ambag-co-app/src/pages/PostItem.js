import React from 'react';
import './postItem.css';
import {Row, Col, Form} from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImages} from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';

function PostItem(props) {
    const [item, setItem] = useState('');
    const [price, setPrice] = useState(0);
    const [charity, setCharity] = useState('');
    const [expiry, setExpiry] = useState('');
    const [description, setDescription] = useState('');


    //if the button was clicked or the trigger == true, display popup
    return (props.trigger) ?
    (
        <div className="outer ">
            <div className="inner">
                <Row>
                    <Col >
                    </Col>
                    <Col>
                        <Button as="input" type="button" className="btn-close float-end mb-3" 
                        onClick={()=> props.setTrigger(false)}/>
                    </Col>
                </Row>
                <Row>
                    <Col >
                <Form.Group as={Col} className=" upload-icon mt-5">
                   <Form.Label className="">
                        <FontAwesomeIcon icon={faImages} className="fa-10x upload-icon-color"></FontAwesomeIcon>
                   </Form.Label>
                   <Form.Label className="">
                        <Form.Control type="file" accept=".png,.jpeg,.jpg" className="form-control form-control-sm mt-4"/>
                   </Form.Label>
                </Form.Group>
              </Col>
                <Col>
                <Form.Group as={Row} className="mb-2">
                    <Form.Label column sm="4" className="mb-2">
                        Item
                    </Form.Label>
                    <Col sm="8" className="mb-2">
                        <Form.Control type="text" value={item} onChange={(e)=> setItem(e.target.value)}/>
                    </Col>

                    <Form.Label column sm="4" className="mb-2">
                        Price
                    </Form.Label>
                    <Col sm="8" className="mb-2">
                        <Form.Control type="text" value={price} onChange={(e)=> setPrice(e.target.value)}/>
                    </Col>

                    <Form.Label column sm="4" className="mb-2">
                        Charity
                    </Form.Label>
                    <Col sm="8" className="mb-2">
                        <Form.Control type="text" value={charity} onChange={(e)=> setCharity(e.target.value)}/>
                    </Col>

                    <Form.Label column sm="4" className="mb-2">
                        Expiry
                    </Form.Label>
                    <Col sm="8" className="mb-2">
                        <Form.Control type="date" value={expiry} onChange={(e)=> setExpiry(e.target.value)}/>
                    </Col>

                    <Form.Label column sm="4" className="mb-2">
                        Description
                    </Form.Label>
                    <Col sm="8" className="mb-2">
                        <Form.Control as="textarea" className="description-box" rows={5}
                        value={description} onChange={(e)=> setDescription(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                </Col>
                </Row>
                <Row >
                <Col >
                    </Col>
                    <Col>
                        <Button as="input" type="button" className="float-end post-item-btn" value="Post"/>
                    </Col>
                </Row>
            </div>
        </div>
    ) : "";
}

export default PostItem


