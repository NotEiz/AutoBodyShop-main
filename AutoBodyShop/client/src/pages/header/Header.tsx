import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { HOME_PATH, LOGIN_PATH } from "../../routes/consts";
import style from "./headerStyles.module.scss";
const Header = () => {
  const { isLoggedIn, logout } = useContext(UserContext);

  return (
    <div className={style.main}>
      {isLoggedIn ? (
        <div className={style.linkWrappers}>
          <Link
            className={style.links}
            to={HOME_PATH}
            onClick={() => {
              logout();
            }}
          >
            Logout
          </Link>
        </div>
      ) : (
        <div className={style.linkWrappers}>
          <Link className={style.links} to={LOGIN_PATH}>
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
