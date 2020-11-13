import React from "react";
import { NavLink } from "react-router-dom";
import  "../styles/StyledNavigation.css";
const Navigation = () => {
    return (
      <>
      <ul className="list-inline">
        <li className="list-inline-item">
          <NavLink exact to="/" activeClassName="activeLink" className="styleLink" id="first">
            Home
          </NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink exact to="/movies/popular" activeClassName="activeLink" className="styleLink">
            Popular
          </NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink exact to="/movies/trending" activeClassName="activeLink" className="styleLink">
            Trending
          </NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink exact to="/movies/upcoming" activeClassName="activeLink" className="styleLink">
            Upcoming
          </NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink exact to="/movies/top-rated" activeClassName="activeLink" className="styleLink">
            Top Rated
          </NavLink>
        </li>
      </ul>
      </>
    );
}


export default Navigation;