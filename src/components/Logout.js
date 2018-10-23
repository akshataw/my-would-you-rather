import React from 'react';
import { handleUserLogout } from '../actions/auth';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Logout extends React.Component{
  componentWillMount(){
    this.props.dispatch(handleUserLogout())
  }

  render(){
    return(
      <div className="container">
       <Redirect to='/' />
      </div>
    )
  }
}

export default connect()(Logout);
