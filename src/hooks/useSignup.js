import { useState } from "react";

// firebase
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase/config";
import { useUserContext } from "./useUserContext";

export const useSignup = () => {
  const [error, setError] = useState(null);

  // context
  const { dispatch } = useUserContext();

  const signup = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        dispatch({ type: "LOGIN", payload: userCredentials.user });
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return { signup, error };
};
