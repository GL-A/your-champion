import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav () {
  let style = {
    textDecoration: 'none'
  }
  return (
    <div className="Nav">
      <ul style={{ textDecoration: 'none'}}>
        <li>
          <NavLink style={ style } activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={ style }  activeClassName="active" to="/champions">
            All Champions
          </NavLink>
        </li>
        <li>
          <NavLink style={ style }  activeClassName="active" to="/champions/favorites">
            Favorite Champions
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
export default Nav;
