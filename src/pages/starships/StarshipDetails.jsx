import { Navigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import defaultSrc from "../../assets/placeholder.jpg";

// styles
import "./StarshipDetails.scss";

// images

// components
import LoadingSpinner from "../../components/LoadingSpinner";

// context
import { useUserContext } from "../../hooks/useUserContext";

export default function StarshipDetails() {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to='/login' replace />;
  }

  const { id } = useParams();
  const {
    data: ship,
    error,
    loading,
  } = useFetch(`https://swapi.dev/api/starships/${id}`);

  // set the ship image on page load
  let shipSrc = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  // onError => if the image is not available we use a fallback image store locally

  return (
    <div className='starship-details container'>
      {loading && <LoadingSpinner />}
      {ship && (
        <>
          <div className='starship-card'>
            <div className='starship-card-container'>
              <img
                src={shipSrc}
                onError={e => {
                  e.target.onError = null;
                  e.target.src = defaultSrc;
                }}
                alt={ship.name}
              />
            </div>
            <h1 className='starship-name'>{ship.name}</h1>
            <p>
              <span className='category'>MODEL</span>
              <span className='value'>{ship.model ?? "unknown"}</span>
            </p>
            <p>
              <span className='category'>CLASS</span>
              <span className='value'>{ship.starship_class ?? "unknown"}</span>
            </p>
            <p>
              <span className='category'>MANUFACTURER</span>
              <span className='value'>{ship.manufacturer ?? "unknown"}</span>
            </p>
            <p>
              <span className='category'>COST</span>
              <span className='value'>
                {`${Number(ship.cost_in_credits).toLocaleString()} ₹` ??
                  "unknown"}
              </span>
            </p>
            <p>
              <span className='category'>CREW</span>
              <span className='value'>{ship.crew ?? "unknown"}</span>
            </p>
            <p>
              <span className='category'>PASSENGER CAPACITY</span>
              <span className='value'>{ship.passenger ?? "unknown"}</span>
            </p>
            <p>
              <span className='category'>CONSUMABLES</span>
              <span className='value'>{ship.consumables ?? "unknown"}</span>
            </p>
            <p>
              <span className='category'>LENGTH</span>
              <span className='value'>
                {`${ship.length} meters` ?? "unknown"}
              </span>
            </p>
            <p>
              <span className='category'>MAX ATMOSPHERING SPEED</span>
              <span className='value'>
                {`${ship.max_atmosphering_speed} km/H` ?? "unknown"}
              </span>
            </p>
            <p>
              <span className='category'>HYPERDRIVE RATING</span>
              <span className='value'>
                {ship.hyperdrive_rating ?? "unknown"}
              </span>
            </p>
            <p>
              <span className='category'>MAX SPEED IN SPACE</span>
              <span className='value'>{`${ship.MGLT} MGLT` ?? "unknown"}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
