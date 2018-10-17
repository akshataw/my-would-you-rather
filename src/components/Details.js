import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAnswer } from '../actions/shared';
import NavBar from './NavBar';
import Posts from './Posts';

class Details extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      answer: this.props.answer
    }
    this.changeMode = this.changeMode.bind(this)
  }

  changeMode(id){
    const { question, dispatch, auth } = this.props
    if(!this.state.answer){
      if(id === 1){
        dispatch(handleAnswer(auth, question.id, 'optionOne'))
        this.setState({
          answer: 'optionOne'
        })
      }
       else{
        dispatch(handleAnswer(auth, question.id, 'optionTwo'))
        this.setState({
          answer: 'optionTwo'
         })
      }
    }
  }

  render(){
    const { question, auth, user, total, percentOne, percentTwo } = this.props
    const { answer } = this.state
    if(auth === null){
      return <Redirect to='/loginpage' />
    }
    let classes
    if(answer){
      if(answer === 'optionOne'){
        classes = ['opt option-one selected', 'opt option-two']
      }
       else if(answer === 'optionTwo'){
        classes = ['opt option-one', 'opt option-two selected']
      }
    }
     else{
      classes = ['opt option-one', 'opt option-two']
    }
    return(
      <div className="container">
       <div className="well well-sm">
         <NavBar />
       </div>
       <br/>
       <div className="well" Style="background: #CCD1D1; border: 2px solid #660099; border-radius: 8px;">
        {question && (
          <div>
            <br/>
            <Posts userId={question.author} time={question.timestamp} />
            <div className="question-set">
              <div className="options">
                <div className={classes[0]} onClick={() => this.changeMode(1)}>{question.optionOne.text}</div>
                <div className={classes[1]} onClick={() => this.changeMode(2)}>{question.optionTwo.text}</div>
              </div>
              <br/>
              { answer && (
                <div className="progress">
                  <div className="progress-bar progress-bar-success" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{ width: `${percentOne}%` }}>{`${percentOne}%`}</div>
                  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{ width: `${percentTwo}%` }}>{`${percentTwo}%`}</div>
                </div>
              )}
              { answer && (
                <div className="total">
                  Total number of votes: {total}
                </div>
              )}
            </div>
          </div>
        )}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ auth, questions, users }, { match }){
  let question = questions[match.params.question_id]
  let answer, percentOne, percentTwo, total

  if(auth !== null){
    const answers = users[auth].answers

    if(answers.hasOwnProperty(question.id)){
      answer = answers[question.id]
    }

    total = question.optionOne.votes.length + question.optionTwo.votes.length
    percentOne = (question.optionOne.votes.length / total) * 100
    percentTwo = (question.optionTwo.votes.length / total) * 100
  }

  return {
    auth,
    question,
    answer,
    total,
    percentOne,
    percentTwo
  }
}

export default connect(mapStateToProps)(Details);
