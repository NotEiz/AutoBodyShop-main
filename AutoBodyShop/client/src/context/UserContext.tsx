import { PropsWithChildren, createContext } from "react";
import useLocalStorage from "../pages/auth/useLocalStorage";
import { User } from "../components/user/types";

const UserContext = createContext<{
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
}>({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useLocalStorage<User | null>("user", null);

  const isLoggedIn = !!user;

  const login = (loginResponse: User) => {
    console.log(loginResponse);
    setUser(loginResponse);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
