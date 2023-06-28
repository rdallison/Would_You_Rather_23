import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Leaderboard from "./Components/Leaderboard";
import Add from "./Components/Add";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleInitialData } from "./store/actions/shared";
import Question from "./Components/Question";
import RequiredAuth from "./Components/RequiredAuth";
import ErrorPage from "./Components/ErrorPage";

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
        <Route
          path="/dashboard"
          element={
            <RequiredAuth>
              <Dashboard />
            </RequiredAuth>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <RequiredAuth>
              <Leaderboard />
            </RequiredAuth>
          }
        />
        <Route
          path="/add"
          element={
            <RequiredAuth>
              <Add />
            </RequiredAuth>
          }
        />
        <Route
          path="/questions/:id"
          element={
            <RequiredAuth>
              <Question />
            </RequiredAuth>
          }
        />
        <Route
          path="*"
          element={
            <RequiredAuth>
              <ErrorPage />
            </RequiredAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
