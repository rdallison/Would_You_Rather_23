import { _saveQuestionAnswer } from "../../_Data";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const CREATE_QUESTION = "CREATE_QUESTION";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function createQuestion(question) {
  return {
    type: CREATE_QUESTION,
    question,
  };
}

export function saveQuestionAnswer(authedUser, qid, value) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    value,
  };
}
