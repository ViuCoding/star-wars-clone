import { createContext, useEffect, useReducer } from "react";

// firebase
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase/config";

// initialize context
export const UserContext = createContext();

// user context reducer controller
const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };

    case "LOGOUT":
      return { ...state, user: null };

    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsReady: true };

    default:
      return state;
  }
};

export default function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    authIsReady: false,
  });

  // on load check if user is logged in
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
      unsub();
    });
  }, []);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
