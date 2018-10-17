import React from 'react';
import NavBar from './NavBar';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAddQuestionAction } from '../actions/shared';

class NewQuestion extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      redirect: false
    }
    this.addQuestion = this.addQuestion.bind(this)
  }

  addQuestion(e){
    e.preventDefault()
    let optOne = e.target[0].value
    let optTwo = e.target[1].value
    this.props.dispatch(handleAddQuestionAction(this.props.auth, optOne, optTwo))
    this.setState({
      redirect: true
    })
  }
  render(){
    if(this.props.auth === null){
      return <Redirect to='/' />
    }

    if(this.state.redirect){
      return <Redirect to='/myQuestion' />
    }
    return(
      <div className="container">
        <NavBar />
        <br/>
        <center className="well" Style="background: #CCD1D1; border: 2px solid #660099; border-radius: 8px;">
        <div>
         <h1 className="heading">Add Question</h1>
        </div>
        <br/>
        <form onSubmit={this.addQuestion}>
        <div className="media">
         <div className="media-body">
          <div className="input-box">
            <input type="text" className="opt input option-one" placeholder="First Option..." />
         </div>
         <h2 Style="margin-left:10px;">OR</h2>
         <div className="input-box">
           <input type="text" className="opt input option-two" placeholder="Second Option..." />
         </div>
         </div>
         <div className="media-right">
          <button className="btn btn-success" Style="float: right; margin-top:65px; font-size: 30px; margin-right:200px; width: 100px; border: 2px solid #1E8449; border-radius: 4px;">Add</button>
         </div>
        </div>

        </form>
       </center>
     </div>
    )
  }
}

function mapStateToProps({auth}){
  return{
    auth
  }
}
export default connect(mapStateToProps)(NewQuestion);
