import React from 'react';
import NavBar from './NavBar';
import UserBar from './UserBar';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Questions from './Questions';

class HomePage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      answeredQues: false
    }
    this.changeMode = this.changeMode.bind(this)
  }

  changeMode(){
    if(this.state.answeredQues){
      this.setState({
        answeredQues: false
      })
    }
    else{
      this.setState({
        answeredQues: true
      })
    }
    this.forceUpdate()
  }

  render(){
    const { answered, unanswered, auth, user } = this.props
    const { answeredQues } = this.state
    if(auth === null){
      return <Redirect to='/loginpage' />
    }
    return(
      <div className="container">
        <NavBar />
       <UserBar user={ user } />
       <br/>
       <div className="questions" Style="float:right;">
        <button className={ answeredQues ? 'answered active-link' : 'answered'} onClick={this.changeMode} Style="height:50px; font-size:22px; background: #2ECC71; border: 2px solid #229954; border-radius:6px;">Answered</button>&nbsp;
        <button className={ answeredQues ? 'unanswered' : 'unanswered active-link'} onClick={this.changeMode} Style="height:50px; font-size:22px; background: #2ECC71; border: 2px solid #229954; border-radius:6px;">Unanswered</button>
       </div>
       <br/>
       <br/>
       <div >
       <div className="question-set">
        <center>
        { answeredQues && answered.map(question => (
          <Questions question={question} answer={user.answers[question.id]}  key={question.id} />
        ))}
        { !answeredQues && unanswered.map(question => (
          <Questions question={question} key={question.id} />
        ))}
        </center>
        </div>
       </div>
    </div>
    )
  }
}

function mapStateToProps({ questions, users, auth}){
  let user
  let answered = []
  let unanswered = []
  if(auth !== null){
    user = users[auth]
  }
  Object.keys(questions).map(que => questions[que]).filter(question => {
    if(user.answers.hasOwnProperty(question.id)){
      answered.push(question)
    }
    else{
      unanswered.push(question)
    }
  })
  return{
    answered,
    unanswered,
    auth,
    user
  }
}

export default connect(mapStateToProps)(HomePage);
