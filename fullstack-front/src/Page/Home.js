import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const {id}= useParams();

  const delUser = async (id) =>{
    await axios.delete(`http://localhost:8080/user/delete/${id}`);
    loadUsers();
  }
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/user");
    setUsers(result.data);
  };
  return (
    <table className="table border shadow">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">UserName</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr>
            <th scope="row" key={index}>
              {index + 1}
            </th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              <Link className="btn btn-primary" to={`/ViewUser/${user.id}`}>View</Link>

              <Link
                className="btn btn-outline-primary"
                to={`/EditUser/${user.id}`}
              >
                Update
              </Link>

              <button className="btn btn-danger" onClick={()=>delUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
