import React, { useEffect, useState } from "react";
import axios from "../../../utilities/axios";
import { Link, useParams } from "react-router-dom";

const UserDetails = () => {
  const [user, setUser] = useState({});
  const params = useParams();

  useEffect(() => {
    fetchUser(params.id);
  }, []);

  const fetchUser = async (userId) => {
    try {
      const userResponse = await axios.get(`users/${userId}`)
      setUser(userResponse.data.data);
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <React.Fragment>
      <div className="page-header">
        <h4>User details</h4>
        <Link className="btn btn-secondary" to="/users">
          User list
        </Link>
      </div>
      <ul className="list-group">
        <li className="list-group-item"><b>Name:</b> {user.name}</li>
        <li className="list-group-item"><b>Email:</b> {user.email}</li>
        <li className="list-group-item"><b>Gender:</b> {user.gender}</li>
        <li className="list-group-item"><b>Status:</b> {user.status}</li>
      </ul>
    </React.Fragment>
  );
};

export default UserDetails;
