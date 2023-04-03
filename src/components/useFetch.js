import { useEffect, useState } from "react";

// Custom hooks must start with 'use'
const useFetch = (endPoint) => {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(endPoint, {
      mode: "no-cors",
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data from that resource");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setContent(data);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [endPoint]);

  return { content, isLoading, error };
};

export default useFetch;
