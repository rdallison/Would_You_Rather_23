import { useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import "../index.css";
import Question from "./Question";
import { useState } from "react";

function QuestionList({ id }) {
  const [singleQuestion, setSingleQuestion] = useState(false);
  const authedUser = useSelector((state) => state.authedUser);
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  const question = questions[id];
  const user = users[question.author];

  const handleClick = () => {
    setSingleQuestion(true);
  };

  return (
    <div>
      {singleQuestion && <Navigate />}
      <div className="question-container">
        <p>{user.name} asks:</p>
        <h4>Would you rather</h4>
        <p>
          {question.optionOne.text.slice(
            0,
            Math.floor(Math.random() * question.optionOne.text.length)
          )}
        </p>
        <Link
          to={{
            pathname: `/question/${question.id}`,
            state: question,
          }}
        >
          <button>Poll</button>
        </Link>
      </div>
    </div>
  );
}

export default QuestionList;
