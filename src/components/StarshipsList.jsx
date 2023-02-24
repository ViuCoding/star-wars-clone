import { Link, useNavigate } from "react-router-dom";
import { useDataContext } from "../hooks/useDataContext";
import LoadingSpinner from "./LoadingSpinner";

// styles
import "./StarshipsList.scss";

export default function StarshipsList() {
  const { starships, loadingAPI, dispatch } = useDataContext();

  const navigate = useNavigate();

  // extract the ID number from starship.url and use it as route param.

  return (
    <div className='starships-list'>
      {loadingAPI && <LoadingSpinner />}
      {starships &&
        starships.map(starship => {
          return (
            <Link
              to={`/starships/${starship.url.replace(/[^0-9]+/g, "")}`}
              className='starship'
              key={starship.name}>
              <h3 className='starship-name'>{starship.name}</h3>
              <p className='starship-model'>{starship.model}</p>
            </Link>
          );
        })}

      {starships.length < 36 ? (
        <button
          className='btn'
          onClick={() => dispatch({ type: "INCREASE_PAGE" })}>
          LOAD MORE SHIPS
        </button>
      ) : (
        <button className='btn' onClick={() => navigate("/")}>
          BACK TO HOME PAGE
        </button>
      )}
    </div>
  );
}
