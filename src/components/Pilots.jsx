//styles
import useFetch from "../hooks/useFetch";
import LoadingSpinner from "./LoadingSpinner";
import "./Pilots.scss";

export default function Pilots({ pilots }) {
  const { data, loading, error } = useFetch(pilots);

  return (
    <div className='pilots'>
      {loading && <LoadingSpinner />}
      {data &&
        data.map(pilot => {
          return <p key={pilot.name}>{pilot.name}</p>;
        })}

      {error && <p>{error}</p>}
    </div>
  );
}
