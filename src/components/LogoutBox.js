import React from 'react';
import  { Link } from 'react-router-dom';

const LogoutBox = () => {
  return(
    <div className="well">
     <h2>Are sure you want to logout?</h2>
     <Link to="/">
       <button className="glyphicon glyphicon-log-out">Logout</button>
     </Link>
     <Link to="/me">
       <button className="glyphicon glyphicon-remove">Cancel</button>
      </Link>
    </div>
  )
}

export default LogoutBox;
