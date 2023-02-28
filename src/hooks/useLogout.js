//firebase
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

// context
import { useUserContext } from "./useUserContext";

// router
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const { dispatch } = useUserContext();

  const navigate = useNavigate();

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
        alert("User logged out");
        navigate("/");
      })
      .catch(error => console.log(error.message));
  };

  return { logout };
};
