import { AuthContext } from "../context/AuthContext.jsx";
import {useContext} from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext must be used within useAuthContext");
  }

  return context;
}