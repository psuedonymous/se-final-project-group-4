import Popup from "./Popup";
import { useState } from "react";
export default function EditProfile(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');

  const handleImageInput = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  }

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setPreview(reader.result)
    }
  }


  const handleNewPost = (e) => {
    e.preventDefault();
    postItem(preview);
  }

  const postItem = (base64EncodedImage) => {
  
    new Promise((resolve, reject)=>{
      const result = fetch('http://localhost:5000/upload-profile',{
        method: 'POST',
        body: JSON.stringify({image: base64EncodedImage,
          acc_username: username,
          acc_password: password,
          acc_email: email
        }),
        headers: {'Content-Type': 'application/json'}
      })
      resolve(result);
      reject("Failed to upload")
    }).then((result) => {
    new Promise((resolve, reject)=>{
      const  theR  = result.json();
      resolve(theR)
      }) 
    })
    .catch((err) => {
      console.error(err)
    })
    }



  return (
    <>
      <Popup>
      <h5 className='header'>
            Post a New Item
          </h5>
          <button onClick={() => props.popupButton(false)} className='btn close-btn'>X</button>

          <label>Username</label>
          <input className="form-control" type="text" placeholder="username"
          value={username} onChange={(e) => {setUsername(e.target.value)}} >
          </input>

          <label>Password</label>
          <input className="form-control" type="text" placeholder="password"
          value={password} onChange={(e) => {setPassword(e.target.value)}}>
          </input>

          <label>Email</label>
          <input className="form-control" type="text" placeholder="email address"
          value={email} onChange={(e) => {setEmail(e.target.value)}}>
          </input>
         
          <form>
            <input
              className=" mt-2"
              type="file"
              name="image"
              onChange={(e) => { handleImageInput(e) }}
              value={image} ></input>
          </form>

          {preview && (<img src={preview} className='mt-2' alt="chosen" style={{ height: '300px', width: '350px' }} />)}
          <button onClick={(e) => {props.popupButton(false); handleNewPost(e) }} type="submit" className='save-btn col-3 ms-auto float-end mb-2 mt-2'>Post</button>
        
      </Popup>
    </>
  );
}