import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { createQuestion } from "../store/actions/questions";
import { userNewQuestion } from "../store/actions/users";
import { formatQuestion } from "../_Data";
import { Navigate } from "react-router-dom";

function Add() {
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");
  const [toHome, setToHome] = useState(false);

  const author = authedUser;

  const handleOneChange = (e) => {
    setOptionOneText(e.target.value);
  };

  const handleTwoChange = (e) => {
    setOptionTwoText(e.target.value);
  };

  const handleSubmit = () => {
    const formattedQuestion = formatQuestion({
      optionOneText,
      optionTwoText,
      author,
    });
    setOptionOneText("");
    setOptionTwoText("");
    dispatch(createQuestion(formattedQuestion));
    dispatch(userNewQuestion(formattedQuestion, authedUser));
    setToHome(true);
  };

  return (
    <div>
      {toHome && <Navigate to="/dashboard" />}
      {/* {authedUser === null ? <Navigate to="/" /> : ""} */}
      <div>
        <h2>Create New Question</h2>
        <h5>Would you rather ...</h5>
        <input
          type="text"
          placeholder="Enter Option One Text Here"
          value={optionOneText}
          onChange={handleOneChange}
        />
        <p>OR</p>
        <input
          type="text"
          placeholder="Enter Option Two Text Here"
          value={optionTwoText}
          onChange={handleTwoChange}
        />
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Add;
