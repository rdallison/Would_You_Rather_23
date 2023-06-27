import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setAuthedUser } from "../store/actions/authedUser";

function Navigation() {
  const dispatch = useDispatch();
  const [loggingOut, setLoggingOut] = useState(false);
  const authedUser = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);

  const handleSubmit = () => {
    setLoggingOut(true);
  };

  return (
    <div>
      {loggingOut && <Navigate to="/" />}
      <Link to="/dashboard">Home</Link>
      <Link to="/add">New Question</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <div>Hello, {authedUser === null ? "" : users?.[authedUser].name} </div>
      <button onClick={handleSubmit}>Logout</button>
    </div>
  );
}

export default Navigation;
