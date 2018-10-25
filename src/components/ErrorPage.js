import React from 'react';
import { Redirect } from 'react-router-dom';

const ErrorPage = (props) => {
  const { auth } = props

  if(auth === null){
    return <Redirect to='/loginpage' />
  }

  return(
    <div className="well">
     <h2>404 Page Not Found!</h2>
    </div>
  )
}

export default ErrorPage;
