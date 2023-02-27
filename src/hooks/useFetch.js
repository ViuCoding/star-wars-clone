import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(URL) {
  // state
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function callAPI() {
    setLoading(true);

    if (typeof URL === "string") {
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

    if (typeof URL === "object") {
      axios
        .all(URL.map(endpoint => axios.get(endpoint)))
        .then(results => {
          let resultsArray = results.map(r => r.data);
          setData(resultsArray);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    }
  }

  useEffect(() => {
    callAPI();
  }, [URL]);

  return { data, error, loading };
}
