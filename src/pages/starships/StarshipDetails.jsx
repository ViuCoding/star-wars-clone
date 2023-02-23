import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

// styles
import "./StarshipDetails.scss";

export default function StarshipDetails() {
  const { id } = useParams();
  const {
    data: ship,
    error,
    loading,
  } = useFetch(`https://swapi.dev/api/starships/${id}`);

  return (
    <div className='starship-details container'>
      {ship && (
        <>
          <h1 className='starship-name'>{ship.name}</h1>
          <div className='starship-card'>
            <h2>SHIP DETAILS</h2>
            <p>
              <span className='category'>MODEL:</span>
              <span className='value'>{ship.model}</span>
            </p>
            <p>
              <span className='category'>CLASS:</span>
              <span className='value'>{ship.starship_class}</span>
            </p>
            <p>
              <span className='category'>MANUFACTURER:</span>
              <span className='value'>{ship.manufacturer}</span>
            </p>
            <p>
              <span className='category'>COST:</span>
              <span className='value'>{ship.cost_in_credits}</span>
            </p>
            <p>
              <span className='category'>CREW:</span>
              <span className='value'>{ship.crew}</span>
            </p>
            <p>
              <span className='category'>PASSENGER CAPACITY:</span>
              <span className='value'>{ship.passenger}</span>
            </p>
            <p>
              <span className='category'>CONSUMABLES:</span>
              <span className='value'>{ship.consumables}</span>
            </p>
            <p>
              <span className='category'>LENGTH:</span>
              <span className='value'>{ship.length} meters</span>
            </p>
            <p>
              <span className='category'>MAX ATMOSPHERING SPEED:</span>
              <span className='value'>{ship.max_atmosphering_speed} KM/H</span>
            </p>
            <p>
              <span className='category'>HYPERDRIVE RATING</span>
              <span className='value'>{ship.hyperdrive_rating} KM/H</span>
            </p>
            <p>
              <span className='category'>MAX SPEED IN SPACE</span>
              <span className='value'>{ship.MGLT} MGLT</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
