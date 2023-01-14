import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export default function Home() {

    const [users, setUsers] = useState([])

    const {id} = useParams()

    useEffect(()=>{
        // console.log("DHOBLE MAHARAJ!!")
        loadUsers()
    },[])
    
    const loadUsers = async () =>{
        const result = await axios.get("http://localhost:8060/users")
        setUsers(result.data)
    }

    const deleteUser=async(id)=>{
        await axios.delete(`http://localhost:8060/deleteuser/${id}`)
        loadUsers()
    }

  return (
    <div className='container'>
        <div className="py4">
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">USERNAME</th>      
      <th scope="col">EMAIL</th>
      <th scope="col">ACTION</th>
    </tr>
  </thead>
  <tbody>
  {
    users.map((user,index)=>(
        <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>

      {/* <td>
      <button >VIEW</button>
      <td><>EDIT</>
      <td><button >DELETE</button>
      </td> */}

      <td>
        <Link to={`/viewuser/${user.id}`} className='btn btn-primary mx-2'>VIEW</Link>
        <Link to={`/updateuser/${user.id}`} className='btn btn-outline-success mx-2'>EDIT</Link>
        <button onClick={()=>deleteUser(user.id)} className='btn btn-danger mx-2'>DELETE</button>
      </td>

    </tr>
    ))
  }
    
  </tbody>
</table>
        </div>
    </div>
  )
}
