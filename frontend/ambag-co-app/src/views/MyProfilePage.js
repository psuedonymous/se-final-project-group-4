import { NavBar } from "../components/NavBar";
import { Link } from "react-router-dom";
export default function MyProfilePage() {
    return (
        <>
            <NavBar/>

            <div class="container">
                <div class ="row-d-flex center">
                    <div class ="mt-5 pt-5 ">
                        <div class ="row z-depth-3">
                            <div class ="col-sm-4 bg-info rounded-left">
                                <div class ="card-block text-center text-white">
                                    <i  class ="fas fa-user-tie fa-10x mt-5 "></i>
                                    <p>Seller</p>

                                </div>
                            </div>
                            <div class ="col-sm-8 bg-white rounded-right">
                                <h3 class ="mt-3 text-center">Information</h3>
                                <Link to="" class="far fa-edit text-decoration-none text-color-black">Edit</Link>
                                <hr class ="badge-primary "/>
                                <div class ="row">
                                    <div class="col-sm-6">
                                        <p class="font-weight-bold">Name:</p>
                                        <h6 class="text-muted"></h6>
                                    </div>
                                    <div class ="col-sm-6">
                                        <p class="font-weight-bold">Account Type:</p>
                                        <h6 class="text-muted"></h6>
                                    </div>
                                    
                                </div>
                                <h4 class="mt-3">Contact Me</h4>
                                <hr class="bg-primary"/>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="font-weight-bold">Email:</p>
                                        <h6 class="text-muted"></h6>
                                    </div>
                                    <div class ="col-sm-6">
                                        <p class="font-weight-bold">Phone:</p>
                                        <h6 class="text-muted"></h6>
                                    </div>
                                    
                                </div>
                    
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}