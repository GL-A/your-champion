import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav () {
  return (
    <div>
      <ul>
        <li>
          <NavLink  activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink  activeClassName="active" to="/champions">
            All Champions
          </NavLink>
        </li>
        <li>
          <NavLink  activeClassName="active" to="/favorites">
            Favorite Champions
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
export default Nav;
