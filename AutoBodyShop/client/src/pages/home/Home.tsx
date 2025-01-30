import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context/UserContext";
import { LOGIN_PATH, REGISTER_PATH } from "../../routes/consts";
const Home = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useContext(UserContext);

  return (
    <>
      {isLoggedIn ? (
        <button
          onClick={() => {
            logout();
          }}
        >
          Disconnect
        </button>
      ) : (
        <button
          onClick={() => {
            navigate(LOGIN_PATH);
          }}
        >
          Login
        </button>
      )}
      {isLoggedIn ? (
        ""
      ) : (
        <button
          onClick={() => {
            navigate(REGISTER_PATH);
          }}
        >
          Register
        </button>
      )}
      ;
    </>
  );
};

export default Home;
