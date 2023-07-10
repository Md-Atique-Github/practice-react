import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Employee List</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="/employees">Employees</a>
            </li> */}
            <li className="nav-item">
            <Link to="/add-employee" className="nav-link">Add Employee</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
