//firebase
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useUserContext } from "./useUserContext";

export const useLogout = () => {
  const { dispatch } = useUserContext();

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
        alert("User logged out");
      })
      .catch(error => console.log(error.message));
  };

  return { logout };
};
