import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

interface PublicRoutePropTypes {
  children: JSX.Element;
}

const PublicRoute = ({ children }: PublicRoutePropTypes) => {
  const { state } = useContext(AuthContext);

  return !state.logged ? children : <Navigate to="/marvel" />;
};

export default PublicRoute;
