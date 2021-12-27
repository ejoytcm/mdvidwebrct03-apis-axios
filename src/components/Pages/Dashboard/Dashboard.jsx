import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="py-5 mh-75vh mt-5">
      <div className="container px-lg-5">
        <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
          <div className="m-4 m-lg-5">
            <h6 className="display-6 fw-bold mb-4">
              Welcome to user management!
            </h6>
            <p className="fs-5 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse in blandit dui. Cras non augue eget enim convallis
              molestie. Morbi nec facilisis erat, porta tempus metus. Nulla
              ornare ligula vel fermentum semper. Praesent vulputate, elit eu
              fermentum congue, felis nibh faucibus lectus, eu dignissim sem ex
              nec diam. Nunc in lectus id risus varius porttitor. Pellentesque
              eros mi, sodales ut lacinia id, bibendum vel turpis.
            </p>
            <Link className="btn btn-secondary btn-lg" to="/users">
              Manage users
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
