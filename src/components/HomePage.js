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
    this.handleSwitch = this.handleSwitch.bind(this);
 }

  handleSwitch(action){
    switch (action) {
      case 'answeredQues':
        this.setState({ answeredQues: true })
        break
      case 'unansweredQues':
        this.setState({ answeredQues: false })
        break
      default:
        break
    }
  }

  render(){
    const { answered, unanswered, auth, user, question } = this.props
    const { answeredQues } = this.state
    console.log(window.location.origin.toString())
    if(auth === null){
      return <Redirect to='/loginpage' />
    }
    return(
      <div className="container">
        <NavBar />
       <UserBar user={ user } />
       <br/>
       <div className="questions" Style="float:center;">
        <div className="centered">
         <div className="questions-box">
           <div className="buttons">
             <div className={answeredQues ? 'answeredQues-button button active' : 'answeredQues-button button'} onClick={() => this.handleSwitch('answeredQues')}>Answered Questions</div>
             <div className={answeredQues ? 'unansweredQues-button button' : 'unansweredQues-button button active'} onClick={() => this.handleSwitch('unansweredQues')}>Unanswered Questions</div>
           </div>
           <br/>
           <div className="sections">
           <div className={answeredQues ? 'answeredQues-section' : 'answeredQues-section hidden'} id='answeredQues-section'>
           { answeredQues &&  answered.map(question => (
             <Questions question={question} answer={user.answers[question.id]}  key={question.id} />
           )).reverse()}
           </div>

           <div className={answeredQues ? 'unansweredQues-section hidden' : 'unansweredQues-section'}>
             { !answeredQues &&  unanswered.map(question => (
               <Questions question={question} key={question.id} />
             )).reverse()}
           </div>
           </div>
         </div>
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
    if(user){
      if(user.answers.hasOwnProperty(question.id)){
        answered.push(question)
      }
      else{
        unanswered.push(question)
      }
    }
    else{
      return(
        <Redirect to='/loginpage' />
      )
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
