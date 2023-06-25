import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Leaderboard from "./Components/Leaderboard";
import QuestionForm from "./Components/QuestionForm";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleInitialData } from "./store/actions/shared";
import Question from "./Components/Question";

function App() {
  const authedUser = useSelector((state) => state.authedUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <div>
      {authedUser === null ? "" : <Navigation />}
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/dashboard" Component={Home} />
        <Route path="/leaderboard" Component={Leaderboard} />
        <Route path="/add" Component={QuestionForm} />
        <Route path="/question/:id" Component={Question} />
      </Routes>
    </div>
  );
}

export default App;
