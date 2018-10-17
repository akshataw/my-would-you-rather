import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NavBar from './NavBar';

const LeaderBoard = (props) => {
  const { auth, user, data } = props

  if(auth === null){
    return <Redirect to='/loginpage' />
  }

  return(
    <div className="container">
     <div className="well well-sm">
      <NavBar />
     </div>
     <div className="well" Style="background: #CCD1D1;">
     <center>
      <h2 className="heading">LeaderBoard
      <img src="/rank-logo.jpg" alt="rank-logo" Style="height:80px; width:80px; margin-left:30px; border:2px solid #ccd1d1; border-radius:50px;" /></h2>
      </center>
      <br/>
      <table className="table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Questions</th>
            <th>Answers</th>
          </tr>
        </thead>
        <tbody>
          { data.map((user, key) => (
            <tr className="rows" key={user.id}>
              <td>{key + 1}</td>
              <td>{user.name}</td>
              <td>{user.questions}</td>
              <td>{user.answers}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

function mapStateToProps({ auth, users }){
  let data = []

  Object.keys(users).map(userId => {
    data.push({
      id: userId,
      name: users[userId].name,
      questions: users[userId].questions.length,
      answers: Object.keys(users[userId].answers).length
    })
  })

  data.sort(function (a, b){
    return (b.questions + b.answers) - (a.questions + a.answers)
  })

  return{
    auth,
    data
  }
}

export default connect(mapStateToProps)(LeaderBoard);
