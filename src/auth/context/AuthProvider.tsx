import { ReactNode, useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {

  const init = () => {
    const user = JSON.parse(localStorage.getItem("user")!);

    return {
      logged: !!user,
      user: user,
    };
  };

  const [state, dispatch] = useReducer(authReducer, {}, init);

  const login = (name: string) => {
    const action = {
      type: types.login,
      payload: {
        id: "ABC",
        name: name,
      },
    };

    localStorage.setItem(
      "user",
      JSON.stringify({
        id: "ABC",
        name: name,
      })
    );
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user")
    const action = {
      type: types.logout,
      payload: null
    };
    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
