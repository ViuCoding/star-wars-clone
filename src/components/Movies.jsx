//styles
import useFetch from "../hooks/useFetch";
import LoadingSpinner from "./LoadingSpinner";
import "./Movies.scss";

export default function Movies({ films }) {
  console.log(films);
  const { data, loading, error } = useFetch(films);

  return (
    <div className='movies'>
      {loading && <LoadingSpinner />}
      {data &&
        data.map(movie => {
          return <p key={movie.title}>{movie.title}</p>;
        })}

      {error && <p>{error}</p>}
    </div>
  );
}
