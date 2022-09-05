import React from "react";
import "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <a className="active" href="#home">
            Business
          </a>
        </li>
        <li>
          <a href="#news">Entertainment</a>
        </li>
        <li>
          <a href="#Health">Health</a>
        </li>
        <li>
          <a href="#Science">Science</a>
        </li>
        <li>
          <a href="#Sports">Sports</a>
        </li>
        <li>
          <a href="#Technology">Technology</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
