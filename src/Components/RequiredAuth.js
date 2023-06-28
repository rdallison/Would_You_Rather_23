import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function RequiredAuth({ children }) {
  const { id } = useParams();
  const authedUser = useSelector((state) => state.authedUser);
  const questions = useSelector((state) => state.questions);
  const route = children.type.name;

  return authedUser === null ? (
    <Navigate
      to="/"
      state={id ? (!questions[id] ? "errorpage" : `questions/${id}`) : route}
    />
  ) : (
    children
  );
}

export default RequiredAuth;
