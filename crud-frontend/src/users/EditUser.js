import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {

    const {id} = useParams()

    let navigate=useNavigate()

const [user, setUser] = useState({
    name:"",
    username:"",
    email:""
})

const{name, username, email}=user

const addUser = (e)=>{
    setUser({...user,[e.target.name]:e.target.value})
}

useEffect(()=>{
    loadUser()
},[]);

const onSubmit= async(e)=>{
    e.preventDefault()
    await axios.put(`http://localhost:8060/updateuser/${id}`,user)
    navigate("/")
};

const loadUser = async ()=>{
    const result=await axios.get(`http://localhost:8060/user/${id}`)
    setUser(result.data)
}

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">EDIT USER</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="Name" className='form-label'>NAME</label>
                    <input onChange={(e)=>addUser(e)} value={name} type="text" className="form-control" placeholder='enter name' name='name' />
                </div>
                <div className="mb-3">
                    <label htmlFor="Username" className='form-label'>USERNAME</label>
                    <input onChange={(e)=>addUser(e)} value={username} type="text" className="form-control" placeholder='enter username' name='username' />
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className='form-label'>EMAIL</label>
                    <input onChange={(e)=>addUser(e)} value={email} type="email" className="form-control" placeholder='enter email address' name='email' />
                </div>
                <button type='submit' className='btn btn-outline-primary'>UPDATE</button>
                <Link to="/" className='btn btn-outline-danger mx-2'>CANCEL</Link>
</form>
</div>
        </div>
    </div>
  )
}
