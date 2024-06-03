import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function AddUser(){
    
    let navigate = useNavigate();

    const {id} = useParams();
    const [user, setUsers] = useState({
        name:"",
        username:"",
        email:""
    })
    const{name, username, email} = user

    const onInputChange=(e)=>{
        setUsers({...user,[e.target.name]: e.target.value});
    }

    useEffect(() => {
        loadUser();
      },[]);

    const onSubmit= async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/update/${id}`,user)
        navigate("/")
    }

    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUsers(result.data);
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text center m-4">Update User</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Enter your name" name="name" onChange={(e)=>onInputChange(e)}></input>
                        <label htmlFor="name" className="form-label">Username</label>
                        <input type="text" className="form-control" placeholder="Enter your username" name="username" onChange={(e)=>onInputChange(e)}></input>
                        <label htmlFor="name" className="form-label">Email</label>
                        <input type="text" className="form-control" placeholder="Enter your email" name="email" onChange={(e)=>onInputChange(e)}></input>
                        <button className="btn btn-outline-primary" onClick={(e)=> onSubmit(e)}>Submit</button>
                        <Link className="btn btn-danger" to="/Home">Cancel</Link>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    ); 
}

