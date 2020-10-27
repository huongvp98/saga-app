import React from "react";
import { Link } from "react-router-dom";
function index(props) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/create">Create</Link>
        </li>
        <li>
          <Link to="/pie-chart">Pie Chart</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default index;
