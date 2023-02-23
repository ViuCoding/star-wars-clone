import { useDataContext } from "../../hooks/useDataContext";

export default function Home() {
  const { starships, dispatch } = useDataContext();

  //console.log(starships);
  return (
    <div>
      {/* <button onClick={() => dispatch({ type: "INCREASE_PAGE" })}>PLUS</button> */}
    </div>
  );
}
