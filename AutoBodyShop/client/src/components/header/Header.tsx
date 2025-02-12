import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { HOME_PATH, LOGIN_PATH } from "../../routes/consts";
import { navBarLinks } from "../../routes/consts";
import style from "./headerStyles.module.scss";
const Header = () => {
  const { isLoggedIn, logout } = useContext(UserContext);

  return (
    <div className={style.main}>
      <div className={style.mainInner}>
        <h1>AutoBodyShop</h1>

        <div className={style.linkWrapper}>
          {navBarLinks.slice(1, 4).map((link) => (
            <Link key={link.path} className={style.links} to={link.path}>
              {link.title}
            </Link>
          ))}

          {isLoggedIn ? (
            <Link
              className={style.links}
              to={HOME_PATH}
              onClick={() => {
                logout();
              }}
            >
              Logout
            </Link>
          ) : (
            <Link className={style.links} to={LOGIN_PATH}>
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
