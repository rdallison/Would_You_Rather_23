import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { setAuthedUser } from "../store/actions/authedUser";
import { useLocation } from "react-router-dom";

function Login() {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [value, setValue] = useState("");
  const users = Object.keys(useSelector((state) => state.users));

  useEffect(() => {
    dispatch(setAuthedUser(null));
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (user) => {
    setValue(user);
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === null || value === "") return;
    dispatch(setAuthedUser(value));
    setIsLogged(true);
  };

  return (
    <div>
      <h1>Welcome to the Would You Rather App</h1>
      <p>Please sign in to contine</p>
      <button onClick={handleOpen}>UserList</button>
      {isOpen ? (
        <ul style={{ listStyle: "none" }}>
          {users.map((user) => (
            <li onClick={(e) => handleClick(user)} key={user}>
              {user}
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <br />
          User: {value}
          <br />
          <br />
          <button onClick={(e) => handleSubmit(e)}>Login</button>
        </div>
      )}
      {isLogged && value !== null && (
        <Navigate to={state ? `/${state.toLowerCase()}` : "/dashboard"} />
      )}
    </div>
  );
}

export default Login;
