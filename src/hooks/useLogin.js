import { useState } from "react";

//firebase
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useUserContext } from "./useUserContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useUserContext();

  const login = (email, password) => {
    setError(null);

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        dispatch({ type: "LOGIN", payload: userCredentials.user });
        setSuccess("User logged in!");
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return { login, error };
};
