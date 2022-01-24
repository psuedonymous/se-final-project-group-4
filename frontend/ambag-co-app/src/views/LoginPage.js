import React from 'react';
import { useState } from 'react';
import { Link, Navigate } from "react-router-dom";

import axios from 'axios';
import { Form, Container } from 'react-bootstrap';




export default function LoginPage() {
    const [loggedIn, setLoggedIn] = useState(false)

    const [inputs, setInputs] = useState({
        acc_email: "",
        acc_password: ""
    });

    const { acc_email, acc_password } = inputs;

    const onChange = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:5000/login', {
            email: acc_email,
            password: acc_password,
        }).then((response) => {
            setLoggedIn(response.data.auth)
        }).catch((e)=>{
            console.log(e)
        })
    }




    return (
        loggedIn ? <Navigate to='/home'/> : 
        <Container>
            <Form onSubmit={onSubmit}>
                <div className="row justify-content-center">
                    <div className="col-11 col-md-7 col-lg-4 mx-0 mb-6">
                        <h1 className="text-center mt-5">Ambag.Co</h1>

                        <div className="card p-0 overflow-hidden h-100 shadow">
                            <div style={{ background: 'linear-gradient(180deg, rgba(125, 171, 233, 0.8) 66.15%, rgba(234, 65, 207, 0) 100%)' }}>
                                <h2 className="text-center mt-3">Log In</h2>
                                <img src="" className="card-img-top img-fluid" />
                                <div className="card-body">
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='acc_email' value={acc_email} onChange={e => onChange(e)} />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name='acc_password' value={acc_password} onChange={e => onChange(e)} />
                                        <label for="floatingPassword">Password</label>
                                    </div >
                                    <div className="text-center">
                                        <button className="btn btn-primary text-right mt-4" >
                                            Log In
                                        </button>
                                    </div>
                                    <p className="text-center mt-4">
                                        <Link to="/signup" class="active">Create</Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Form>
        </Container>
    );
};

