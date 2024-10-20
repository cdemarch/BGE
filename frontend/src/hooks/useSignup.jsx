import { useState } from "react";
import { useAuthContext } from "./useAuthContext.jsx";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext()

  const signUp = async (username, password, firstName, lastName) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch('http://localhost:4000/api/user/signup', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username, password, firstName, lastName})
    })

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      return;
    }

    if (response.ok) {
      // Save user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // Update auth context
      dispatch({type: "LOGIN", payload: json});

      setIsLoading(false);
    }
  }

  return { signUp, isLoading, error}
}

