import { createContext, useEffect, useReducer } from "react";

import axios from "axios";

// create context
export const DataContext = createContext();

// create data reducer function
const dataReducer = (state, action) => {
  switch (action.type) {
    // get first 10 ships
    case "FETCH_SHIPS":
      return { ...state, starships: action.payload };

    // increase API query param "page"
    case "INCREASE_PAGE":
      if (state.starshipsPage < 4) {
        return { ...state, starshipsPage: state.starshipsPage + 1 };
      } else {
        return state;
      }

    // fetch more ships, when clicking "more ships" button
    case "MORE_SHIPS":
      return { ...state, starships: [...state.starships, ...action.payload] };

    default:
      return state;
  }
};

// data provider element that will wrap <App/>
export default function DataProvider({ children }) {
  // state

  const [state, dispatch] = useReducer(dataReducer, {
    starships: [],
    starshipsPage: 1,
  });

  // functions
  function fetchStarships(URL) {
    axios
      .get(URL)
      .then(res => {
        if (state.starshipsPage === 1) {
          dispatch({ type: "FETCH_SHIPS", payload: res.data.results });
        } else {
          dispatch({ type: "MORE_SHIPS", payload: res.data.results });
        }
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  // fetch ships on mount
  useEffect(() => {
    fetchStarships(
      `https://swapi.dev/api/starships/?page=${state.starshipsPage}`
    );
  }, [state.starshipsPage]);

  return (
    <DataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
