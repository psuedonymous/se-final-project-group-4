import React from 'react';
import { Link } from "react-router-dom";
export function Login()  {
    return (
        <div className ="row justify-content-center">
            <div className = "col-11 col-md-7 col-lg-4 mx-0 mb-6">
            <h1 className="text-center mt-5">Ambag.Co</h1>
                <div class="card p-0 overflow-hidden h-100 shadow">
                    <div style={{background:'linear-gradient(180deg, rgba(125, 171, 233, 0.8) 66.15%, rgba(234, 65, 207, 0) 100%)'}}>
                    <h2 className ="text-center mt-3">Log In</h2>
                    <img src="" class="card-img-top img-fluid" />
                        <div class="card-body">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                                <label for="floatingPassword">Password</label>
                            </div >
                            <div class ="text-center">
                            <button class = "btn btn-primary text-right mt-4">
                                Log In 
                            </button>
                            </div>
                            <p className="text-center mt-4">
                                <Link to="/Signup" class="active">Create</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

