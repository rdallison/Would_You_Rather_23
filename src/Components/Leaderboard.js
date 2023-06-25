import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Leaderboard() {
  const authedUser = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);

  return (
    <div>
      {authedUser === null ? <Navigate to="/" /> : ""}
      <ul>
        {Object.keys(users)
          .map((username) => users[username])
          .map((user) => {
            const questionsAnswered = Object.keys(user.answers).length;
            const questionsCreated = Object.keys(user.questions).length;
            const score = questionsAnswered + questionsCreated;
            const name = user.name;

            return { questionsAnswered, questionsCreated, score, name };
          })
          .sort((a, b) => b.score - a.score)
          .map((user) => (
            <li key={user.name}>
              <h2>{user.name}</h2>
              <p>Answered Questions: {user.questionsAnswered}</p>
              <p>Created Questions: {user.questionsCreated}</p>
              <p>Score: {user.score}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
