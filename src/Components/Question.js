import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveAnswer } from "../store/actions/users";
import { saveQuestionAnswer } from "../store/actions/questions";
import { Navigate } from "react-router-dom";

function Question() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const questions = useSelector((state) => state.questions);
  const authedUser = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);
  const { id } = useParams();
  const question = questions[id];
  const qid = question.id;
  const oneVotes = question.optionOne.votes.length;
  const twoVotes = question.optionTwo.votes.length;
  const totalVotes = oneVotes + twoVotes;
  console.log(id);

  const content = users[authedUser].answers[qid] ? (
    <div>
      {authedUser === null ? <Navigate to="/" /> : ""}
      <h4>Asked by {users[question.author].name}</h4>
      <h2>Results</h2>
      <div
        style={
          users[authedUser].answers[qid] === "optionOne"
            ? { backgroundColor: "lightgreen" }
            : {}
        }
      >
        <p>{question.optionOne.text}</p>
        <p>
          {oneVotes} out of {totalVotes} votes{" "}
          {oneVotes / totalVotes === 1
            ? 100
            : Math.floor((oneVotes / totalVotes) * 100)}
          %
        </p>
      </div>
      <div
        style={
          users[authedUser].answers[qid] === "optionTwo"
            ? { backgroundColor: "lightgreen" }
            : {}
        }
      >
        <p>{question.optionTwo.text}</p>
        <p>
          {twoVotes} out of {totalVotes} votes{" "}
          {twoVotes / totalVotes === 1
            ? 100
            : Math.floor((twoVotes / totalVotes) * 100)}
          %
        </p>
      </div>
    </div>
  ) : (
    <div>
      <h2>{users[question.author].name} asks:</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          <input
            type="radio"
            name="question"
            value="optionOne"
            onChange={(e) => setValue(e.target.value)}
          />
          {question.optionOne.text}
        </label>
        <br />
        <br />
        <label>
          <input
            type="radio"
            name="question"
            value="optionTwo"
            onChange={(e) => setValue(e.target.value)}
          />
          {question.optionTwo.text}
        </label>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveQuestionAnswer(authedUser, qid, value));
    dispatch(saveAnswer(authedUser, qid, value));
  };

  return <div>{content}</div>;
}

export default Question;
