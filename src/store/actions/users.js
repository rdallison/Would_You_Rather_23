export const RECEIVE_USERS = "RECEIVE_USERS";
export const USER_NEW_QUESTION = "USER_NEW_QUESTION";
export const SAVE_ANSWER = "SAVE_ANSWER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function userNewQuestion(formattedQuestion, authedUser) {
  return {
    type: USER_NEW_QUESTION,
    formattedQuestion,
    authedUser,
  };
}

export function saveAnswer(authedUser, qid, value) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    value,
  };
}
