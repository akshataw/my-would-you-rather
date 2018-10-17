import React from 'react';
import { Link } from 'react-router-dom';

const FirstPage = (props) => {
  const user = props
  return(
    <div className="container">
    <center className="first-page">
     <div className="well" Style="border: 2px solid #566573; border-radius: 18px;">
      <h2 className="heading">Would You Rather?</h2>
      <br/>
      <Link to="/loginpage" className="link">Lets Start...</Link>
      <br/>
      <br/>
      <span className="text">Ready to play Would You Rather?</span>
     </div>
     </center>
    </div>
  )
}

export default FirstPage;
