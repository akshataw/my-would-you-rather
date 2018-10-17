export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function handleGetQuestions(questions){
  return {
    type: GET_QUESTIONS,
    questions
  }
}

export function handleSaveAnswer(auth, qid, option){
  return {
    type: ANSWER_QUESTION,
    auth,
    qid,
    option
  }
}

export function handleAddQuestion(question){
  return {
    type: ADD_QUESTION,
    question
  }
}
