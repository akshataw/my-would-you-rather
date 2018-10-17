import React, { Component } from 'react';
import Loading from 'react-loading-bar';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import FirstPage from './components/FirstPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import Details from './components/Details';
import NewQuestion from './components/NewQuestion';
import MyQuestions from './components/MyQuestions';
import LeaderBoard from './components/LeaderBoard';
import LogoutPage from './components/Logout';

class App extends Component {
  state = {
    loading: true
  };
  componentDidMount(){
     setTimeout(() => this.setState({
        loading: false
       }), 1500);
   this.props.dispatch(handleInitialData())
  }
  render() {
    const { loading } = this.state;
    if(loading){
      return null;
    }

    return (
      <div className="App">
       <BrowserRouter>
        <div className="routes">
         <Route exact path='/' component={FirstPage} />
         <Route exact path='/loginpage' component={LoginPage} />
         <Route exact path='/me' component={HomePage} />
         <Route exact path='/questions/:question_id' component={Details} />
         <Route exact path='/add' component={NewQuestion} />
         <Route exact path='/myQuestion' component={MyQuestions} />
         <Route exact path='/leaderboard' component={LeaderBoard} />
         <Route exact path='/logout' component={LogoutPage} />
        </div>
       </BrowserRouter>
      </div>
    );
  }
}

export default connect()(App);
