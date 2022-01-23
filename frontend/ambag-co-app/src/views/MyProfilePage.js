import { NavBar } from "../components/NavBar";
import { Link as button } from "react-router-dom";
import  EditProfile  from "../components/EditProfile"
import { useState, useEffect} from 'react';
import { displayProfile } from "../apis/Get-apis";

export default function MyProfilePage() {
  const [PostButton, setPostButton] = useState(false);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    displayProfile(setProfile)
  })


    return (
        <>
            <NavBar />

            <div class="container">
                <div class ="row-d-flex center">
                    <div class ="mt-5 pt-5 ">
                        <div class ="row z-depth-3">
                            <div class ="col-sm-4 rounded-left">
                                <div>
                                    {profile.map(account => {
                                      return (
                                        <img src={account.acc_image} height={250} width={300}/>
                                      )
                                    })}
                                </div>
                            </div>
                            <div class ="col-sm-8 bg-white rounded-right">
                                <h3 class ="mt-3 text-center">Information</h3>
                                <button class="far fa-edit text-decoration-none text-color-black"
                                onClick={() => setPostButton(true) }>Edit</button>
                                {PostButton && <EditProfile popupButton={setPostButton} accId={profile.map(acc=>{ return acc.acc_id})} />}

                                <hr class ="badge-primary "/>
                                <div class ="row">
                                    <div class="col-sm-6">
                                        <p class="font-weight-bold">Name:</p>
                                        <h6 class="text-muted">
                                        {profile.map(account => {
                                      return (
                                        account.acc_username
                                      )
                                    })}
                                        </h6>
                                    </div>
                                    <div class ="col-sm-6">
                                       
                                        <h6 class="text-muted"></h6>
                                    </div>
                                    
                                </div>
                                <h4 class="mt-3">Contact Me</h4>
                                <hr class="bg-primary"/>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="font-weight-bold">Email:</p>
                                        <h6 class="text-muted">
                                        {profile.map(account => {
                                      return (
                                        account.acc_email
                                      )
                                    })}
                                        </h6>
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