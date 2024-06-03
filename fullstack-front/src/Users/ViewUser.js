import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function viewUser() {
  const { id } = useParams();
  const [user, setUsers] = useState({
    name: "",
    username: "",
    email: "",
  });
  const { name, username, email } = user;

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUsers(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text center m-4">User Details</h2>

          <div className="mb-3">
            <ul className="User-List">
              <li>Name: {user.name}</li>
              <li>UserName: {user.username}</li>
              <li>Email: {user.email}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
