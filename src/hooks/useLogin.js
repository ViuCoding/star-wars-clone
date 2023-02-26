import { useState } from "react";

//firebase
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useUserContext } from "./useUserContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { dispatch } = useUserContext();

  const navigate = useNavigate();

  const login = (email, password) => {
    setSuccess(null);
    setError(null);

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        dispatch({ type: "LOGIN", payload: userCredentials.user });
        setSuccess("User logged in!");

        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return { login, error, success };
};
