import {
  GET_USERS,
  USER_ANSWER_QUESTION,
  ADD_USER_QUESTION
} from '../actions/users';

export function users(state = {}, action){
  switch (action.type) {
    case GET_USERS:
      return{
        ...state,
        ...action.users
      }
    case USER_ANSWER_QUESTION:
      return{
        ...state,
        [action.auth]: {
          ...state[action.auth],
          answers: {
            ...state[action.auth].answers,
            [action.qid]: action.option
          }
        }
      }
    case ADD_USER_QUESTION:
      return{
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: [...state[action.question.author].questions, action.question.id]
        }
      }
      break;
    default:
       return state
  }
}
