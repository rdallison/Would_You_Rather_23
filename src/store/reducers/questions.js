import { RECEIVE_QUESTIONS } from "../actions/questions";
import { CREATE_QUESTION } from "../actions/questions";
import { SAVE_QUESTION_ANSWER } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case CREATE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case SAVE_QUESTION_ANSWER:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.value]: {
            ...state[action.qid][action.value],
            votes: state[action.qid][action.value].votes.concat([
              action.authedUser,
            ]),
          },
        },
      };
    default:
      return state;
  }
}
