import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(URL) {
  // state
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function getShip() {
    setLoading(true);
    axios
      .get(URL)
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }

  useEffect(() => {
    getShip();
  }, [URL]);

  return { data, error, loading };
}
