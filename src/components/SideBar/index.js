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
      </ul>
    </div>
  );
}

export default index;
