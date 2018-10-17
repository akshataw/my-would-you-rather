import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAnswer } from '../actions/shared';

class Questions extends Component {
  constructor (props) {
    super(props)
    this.state = {
      answer: this.props.answer
    }
    this.changeOption = this.changeOption.bind(this)
  }

  changeOption(opt){
    const { dispatch, auth, question } = this.props
    if (!this.state.answer) {
      if (opt === 1) {
        dispatch(handleAnswer(auth, question.id, 'optionOne'))
        this.setState({ answer: 'optionOne' })
      } else if (opt === 2) {
        dispatch(handleAnswer(auth, question.id, 'optionTwo'))
        this.setState({ answer: 'optionTwo' })
      }
    }
  }

  render(){
    const { question } = this.props
    const { answer } = this.state
    let classes = []
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
    return (
      <div className="container">
       <div className="well" Style="background: #CCD1D1; border: 2px solid #660099; border-radius: 8px;">
       <div className="media">
        <div className="media-body">
         <div className="well well-sm" Style="border: 2px solid black; border-radius: 6px;">
          <div className={classes[0]} onClick={() => this.changeOption(1)}>{question.optionOne.text}</div>
         </div>
         <div className="well well-sm" Style="border: 2px solid black; border-radius: 6px;">
          <div className={classes[1]} onClick={() => this.changeOption(2)}>{question.optionTwo.text}</div>
         </div>
         </div>
         <div className="media-right">
         <Link to={`/questions/${question.id}`}>
           <button className="btn btn-success" Style="margin-top:35px; font-size: 30px; margin-right: 30px; margin-left: 20px; border: 2px solid #1E8449; border-radius: 4px;">See</button>
         </Link>
        </div>
       </div>
      </div>
     </div>
    )
  }
}

function mapStateToProps ({ auth }) {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Questions);
