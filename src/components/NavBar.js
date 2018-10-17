import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const { user } = props
    return(
      <div className="navs" Style="background: #CCD1D1; border-radius: 8px;">
       <ul className="nav nav-pills">
        <li><Link to="/">Would You Rather?</Link></li>
        <li><Link to="/me">Home</Link></li>
        <li><Link to="/add">New Question</Link></li>
        <li><Link to="/myQuestion">My Question</Link></li>
        <li><Link to="/leaderboard">LeaderBoard</Link></li>
        <li Style="float:right; margin-right:70px;">
          <Link to="/logout">
            <button className="btn btn-primary" Style="height:50px; width: 90px;">Logout</button>
          </Link>
        </li>
      </ul>
    </div>
    )
}

export default NavBar;
