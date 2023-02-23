import { Link } from "react-router-dom";
import { useDataContext } from "../hooks/useDataContext";

// styles
import "./StarshipsList.scss";

export default function StarshipsList() {
  const { starships, dispatch } = useDataContext();

  return (
    <div className='starships-list container'>
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

      <button
        className='btn'
        onClick={() => dispatch({ type: "INCREASE_PAGE" })}>
        LOAR MORE SHIPS
      </button>
    </div>
  );
}
