import React from 'react';
import { handleUserLogout } from '../actions/auth';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Prompt } from 'react-router';

class Logout extends React.Component{
  componentWillMount(){
    this.props.dispatch(handleUserLogout())
  }

  render(){
    return(
      <div className="container">
       <Prompt message="Are sure to leave this site?" />
       <Redirect to='/' />
      </div>
    )
  }
}

export default connect()(Logout);
