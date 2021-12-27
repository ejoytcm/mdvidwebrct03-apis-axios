import axios from "../../../utilities/axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const AddUser = () => {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    gender: "",
    status: "active",
  });
  const genderOptions = [
    { id: "male", label: "Male" },
    { id: "female", label: "Female" },
  ];
  const history = useHistory();

  const userFormHandler = (event) => {
    setUserForm((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const saveUser = async () => {
    try {
      await axios.post("users", userForm);
      window.alert("User added successfully");
      history.push("/users");
    } catch(error) {
      console.log(error)
    }
    
  }

  const userFormSubmitHandler = event => {
    event.preventDefault();
    saveUser();
  }

  return (
    <React.Fragment>
      <div className="page-header">
        <h4>Add user</h4>
        <Link className="btn btn-secondary" to="/users">
          User list
        </Link>
      </div>
      <form className="mt-5" onSubmit={userFormSubmitHandler}>
        <div className="form-group">
          <label htmlFor="inputFullname">Full name</label>
          <input
            type="text"
            className="form-control"
            id="inputFullname"
            name="name"
            value={userForm.name}
            onChange={userFormHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            name="email"
            value={userForm.email}
            onChange={userFormHandler}
          />
        </div>
        <div className="form-group">
          <label className="d-block">Gender</label>
          {genderOptions.map((gender) => (
            <div className="form-check form-check-inline" key={gender.id}>
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id={`radio${gender.label}`}
                value={gender.id}
                onChange={userFormHandler}
                checked={userForm.gender === gender.id}
              />
              <label
                className="form-check-label"
                htmlFor={`radio${gender.label}`}
              >
                {gender.label}
              </label>
            </div>
          ))}
        </div>
        <button className="btn btn-secondary">Add user</button>
      </form>
    </React.Fragment>
  );
};

export default AddUser;
