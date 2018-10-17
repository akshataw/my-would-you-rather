import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import UserBar from './UserBar';
import Questions from './Questions';
import { Redirect } from 'react-router-dom';

const MyQuestion = (props) => {
  const { questions, user, auth } = props

  if(auth === null){
    return <Redirect to='/loginpage' />
  }

  return(
    <div className="container">
      <NavBar />
     <UserBar user={ user } />
      <div className="question-set">
        { questions.map(question => (
          <Questions question={question} answer={user.answers[question.id]} key={question.id} />
        ))}
      </div>
    </div>
  )
}

function mapStateToProps ({ auth, users, questions }) {
  let myQuestions = []
  let user = users[auth]

  Object.keys(questions).map(k => questions[k]).filter(question => {
    if (user.questions.includes(question.id)) {
      myQuestions.push(question)
    }
  })

  return {
    auth,
    user: users[auth],
    questions: myQuestions
  }
}

export default connect(mapStateToProps)(MyQuestion);
