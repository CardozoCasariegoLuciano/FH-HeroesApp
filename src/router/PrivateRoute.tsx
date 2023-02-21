import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

interface PrivateRoutePropTypes {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRoutePropTypes) => {
  const { state } = useContext(AuthContext);
  const {pathname, search} = useLocation()

  const lastPath = pathname + search
  localStorage.setItem("lastPath", lastPath)

  return state.logged ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
