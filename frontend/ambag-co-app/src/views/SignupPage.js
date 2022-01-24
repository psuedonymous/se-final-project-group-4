import { Form, Container, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react";
import {Link, Navigate} from "react-router-dom"
import axios from 'axios';





export default function SignupPage() {

    const [logInEnabled, setLogInEnabled] = useState(false)
    const [inputs, setInputs] = useState({
        acc_username: "",
        acc_email: "",
        acc_password: "",
        user_fname: "",
        user_lname: "",
        user_cont_num: "",
        user_dob: "",
        user_type: ""
    });

    const { acc_username, acc_email, acc_password, user_fname, user_lname, user_cont_num, user_dob, user_type } = inputs;

    const onChange = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value });
    

    const onSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:5000/signup', {
            username: acc_username,
            email: acc_email,
            password: acc_password,
            firstName: user_fname,
            lastName: user_lname,
            contactNumber: user_cont_num,
            dateOfBirth: user_dob,
            type: user_type,
        }).then((response) => {
            console.log(response.data)
            setLogInEnabled(true)
        })
    }

    return (
        logInEnabled ? <Navigate to='/login'/> :  
        <div style={{ background: 'linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)', minHeight: '100vh' }}>
            <Container>
                <Form onSubmit={onSubmit}>
                    <Row className='justify-content-center'>
                        <h3 className='mt-5 text-center'>Sign Up</h3>
                        <Col sm={4} >
                            <div>
                                <label>Username</label>
                                <input type="text" className="form-control" name="acc_username" placeholder="Username" value={acc_username} onChange={e => onChange(e)} required />
                                <label>Email</label>
                                <input type="email" className="form-control" name="acc_email" placeholder="email@gmail.com" value={acc_email} onChange={e => onChange(e)} required />
                                <label>Password</label>
                                <input type="password" className="form-control" name="acc_password" placeholder="Password" value={acc_password} onChange={e => onChange(e)} required />
                                <label>First Name</label>
                                <input type="text" className="form-control" name="user_fname" placeholder="First name" value={user_fname} onChange={e => onChange(e)} required />
                                <label>Last Name</label>
                                <input type="text" className="form-control" name="user_lname" placeholder="Last name" value={user_lname} onChange={e => onChange(e)} required />
                            </div>

                        </Col>

                        <Col sm={4}>
                            <div>
                                <label>Contact Number</label>
                                <input type="tel" className="form-control" pattern="^(09|\+639)\d{9}$" name="user_cont_num" placeholder="09xxxxxxxxx" value={user_cont_num} onChange={e => onChange(e)} required />
                                <label>Date of Birth</label>
                                <input type="date" className="form-control" name="user_dob" value={user_dob} onChange={e => onChange(e)} required />
                                <label>User Type</label>
                                <input type="text" className="form-control" name="user_type" placeholder="Buyer or Seller" value={user_type} onChange={e => onChange(e)} required />
                                <Row className='justify-content-center' xs={2}>
                                    <button type="submit" className="btn btn-dark btn-lg mt-3" >Create Account</button>
                                </Row>
                                <p className="text-center mt-2"> Already Registered?<Link to='/login'> Log in here</Link> </p>

                            </div>
                        </Col>

                    </Row>
                </Form>
            </Container>
        </div>
        
    );
}