import { handleGetUsers,
        handleSaveUserAnswer,
        handleAddUserQuestion
      } from './users';
import { handleGetQuestions,
         handleSaveAnswer,
         handleAddQuestion
        } from './questions';
import { handleUserLogin } from './auth';
import {
  getInitialData,
  saveQuestionAnswer,
  saveQuestion
} from '../utils/DataAPI';

export const GET_INITIAL_DATA = 'GET_INITIAL_DATA'

export function handleInitialData () {
  return (dispatch) => {
    getInitialData().then(({users, questions}) => {
      dispatch(handleGetUsers(users))
      dispatch(handleGetQuestions(questions))
      dispatch(handleUserLogin(null))
    })
  }
}

export function handleAnswer (auth, qid, option) {
  const data = {
    authedUser: auth,
    qid,
    answer: option
  }
  return (dispatch) => {
    saveQuestionAnswer(data)
      .then(() => {
        dispatch(handleSaveAnswer(auth, qid, option))
        dispatch(handleSaveUserAnswer(auth, qid, option))
      })
  }
}

export function handleAddQuestionAction (auth, optOne, optTwo) {
  return dispatch => {
    saveQuestion({
      optionOneText: optOne,
      optionTwoText: optTwo,
      author: auth
    }).then(question => {
      dispatch(handleAddUserQuestion(question))
      dispatch(handleAddQuestion(question))
    })
  }
}
