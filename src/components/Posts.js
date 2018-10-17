import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

const Posts = (props) => {
  const { user, time } = props
  return (
    <div className="posts">
      <div className="user-info">&nbsp;
       <img src="/person.png" alt="user-icon" Style="height:75px; width:75px;" /> 
       <span className="ques-by"> &nbsp; Question by {user.name}, &nbsp;</span>
       <span className="post-time">Posted {moment(time).fromNow()}</span>
      </div>
    </div>
  )
}

function mapStateToProps ({ users }, { userId }) {
  return {
    user: users[userId]
  }
}

export default connect(mapStateToProps)(Posts);
