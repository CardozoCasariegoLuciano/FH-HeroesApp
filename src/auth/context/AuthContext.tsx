import { createContext } from "react";
import { Istate } from "./AuthReducer";

interface AuthContextType {
  state: Istate;
  login: (name: string) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthContextType);
