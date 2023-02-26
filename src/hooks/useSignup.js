import { useState } from "react";
import { useNavigate } from "react-router";

// firebase
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase/config";
import { useUserContext } from "./useUserContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  // context
  const { dispatch } = useUserContext();

  const signup = (email, password) => {
    setError(null);
    setSuccess(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        dispatch({ type: "LOGIN", payload: userCredentials.user });
        setSuccess("User signed up!");

        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return { signup, error, success };
};
