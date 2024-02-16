import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage"
import app from  '../firebase'
import { useRef } from 'react'
const Profile = () => {
  let fileRef = useRef(undefined)
  let {currentUser} = useSelector(state => state.user)
  let [filePerce, setFilePerce] = useState(0)
  let [fileUploadError, setFileUploadError]  = useState(false)
  const [file, setFile] = useState(null)
  const [formData, setFormData] = useState({})
  console.log(formData);
  console.log(filePerce);
  console.log(fileUploadError);
  // allow read,
  // write: if request.resource.size < 2 *1024 *1024 &&
  // request.resource.contentType.matches("image/.*")

  useEffect(() => {
  if (file) {
    handleFileUpload(file)
  }
 
  }, [file])
  let handleFileUpload = (file)=>{
   
      
    let storege = getStorage(app)
    let fileName =new Date().getTime()+ file.name
    let storageRef = ref(storege, fileName)
    let uploadTask = uploadBytesResumable(storageRef, file)
    uploadTask.on("state_changed", (snapshot)=>{
let progress = (snapshot.bytesTransferred / snapshot.totalBytes)* 100
setFilePerce(Math.round( progress))
    },
    (error)=>{
setFileUploadError(true)
    },
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then ((downloadURL)=>{
setFormData({...formData,avatar:downloadURL})
      })
    }
    );
      }
  return (
    <div className=''>
    <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
<form className='flex flex-col gap-4'>
  <input onChange={(e)=>setFile(e.target.files[0])} type="file" ref={fileRef}  hidden accept='image/*'/>
<img src={currentUser.avatar} alt="" className=" h-28 w-28 rounded-full  self-center" onClick={()=>{
  fileRef.current.click()
}}/>
<input type="text" placeholder='username' className='rounded-lg border p-3 h-19 w-72 mx-auto' id='username'/>
<input type="email" placeholder='email' className='rounded-lg border p-3 h-19 w-72 mx-auto' id='email'/>
<input type="password" placeholder='password' className='rounded-lg border p-3 h-19 w-72 mx-auto' id='password'/>
<button className=' bg-blue-800 p-3 rounded-lg h-19 w-72  mx-auto text-white hover:opacity-95 disabled:opacity-80'>update</button>
</form>
<div className=' p-3 h-19 w-72 mx-auto justify-between flex'>
  <span className=' text-red-700 cursor-pointer'>
    delete account
  </span >

  <span className=' text-red-700 cursor-pointer'>
    sign out
  </span>
</div>
    </div>
  )
}

export default Profile