import { useSelector } from "react-redux";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import QuestionList from "./QuestionList";

function Home() {
  const [questionType, setQuestionType] = useState("unanswered");
  const authedUser = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);
  const questions = useSelector((state) => state.questions);
  const user = users[authedUser];

  const filteredQuestions =
    questionType === "answered"
      ? Object.keys(user.answers).map((answerID) => questions[answerID])
      : Object.keys(questions)
          .filter((questionID) => !user.answers[questionID])
          .map((questionID) => questions[questionID])
          .sort((a, b) => b.timestamp - a.timestamp);

  const handleAnswered = () => {
    setQuestionType("answered");
  };

  const handleUnanswered = () => {
    setQuestionType("unanswered");
  };

  return (
    <div>
      {authedUser === null ? <Navigate to="/" /> : ""}
      <h3>Dashboard</h3>
      <button
        disabled={questionType === "unanswered"}
        onClick={handleUnanswered}
      >
        Unanswered
      </button>
      <button disabled={questionType === "answered"} onClick={handleAnswered}>
        Answered
      </button>
      <ul>
        {filteredQuestions.map((question) => (
          <li key={question.id}>
            <QuestionList id={question.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
