import { useState } from "react";
import { useNavigate } from "react-router";

// firebase
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase/config";
import { useUserContext } from "./useUserContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // context
  const { dispatch } = useUserContext();

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        alert("USER SIGNED UP");
        dispatch({ type: "LOGIN", payload: userCredentials });
        navigate("/");
        console.log(userCredentials);
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return { signup, error };
};
