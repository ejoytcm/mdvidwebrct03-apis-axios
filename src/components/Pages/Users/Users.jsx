import React, { useEffect, useState } from "react";
import axios from "../../../utilities/axios";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Loader from "../../UI/Loader/Loader";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [usersMeta, setUsersMeta] = useState({});
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  let selectedPage = 0;

  useEffect(() => fetchUsers(), []);

  const fetchUsers = async () => {
    try {
      if(!isLoading) setIsLoading(true);
      let queryString = `?page=${selectedPage + 1}`;
      if(search) queryString += `&name=${search}`;
      const usersResponse = await axios.get(`users${queryString}`);
      setUsers(usersResponse.data.data);
      setUsersMeta(usersResponse.data.meta.pagination);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageClick = (event) => {
    selectedPage = event.selected;
    fetchUsers();
  };

  const searchInputHandler = (event) => {
    setSearch(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="page-header">
        <h4>User list</h4>
        <Link className="btn btn-secondary" to="/users/add">
          Add user
        </Link>
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search user by name ..."
          aria-label="Search user"
          value={search}
          onChange={searchInputHandler}
        />
        <div className="input-group-append">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={fetchUsers}
          >
            Button
          </button>
        </div>
      </div>
      <table className="table table-striped mb-5">
        <thead className="thead-dark">
          <tr>
            <th>Fullname</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <Link
                  to={`/users/${user.id}`}
                  className="nav-link text-dark pad-0"
                >
                  <b>{user.name}</b>
                </Link>
              </td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.status}</td>
            </tr>
          ))}
          {!users.length && !isLoading && (
            <tr>
              <td colSpan="4" className="text-center">
                Sorry! No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={usersMeta.pages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="pagination"
        pageClassName="page-item"
        breakClassName="page-item"
        nextClassName="page-item"
        previousClassName="page-item"
        pageLinkClassName="page-link text-dark"
        breakLinkClassName="page-link text-dark"
        nextLinkClassName="page-link text-dark"
        previousLinkClassName="page-link text-dark"
        activeLinkClassName="text-white bg-secondary"
      />
      {isLoading && <Loader />}
    </React.Fragment>
  );
};

export default Users;
