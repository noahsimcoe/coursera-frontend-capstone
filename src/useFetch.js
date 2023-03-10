import { useState, useEffect } from "react";
 // the useEffect fires upon each re-render (delete, refresh, etc.)

 //basically this is a CUSTOM HOOK that can be reused throughout the app.
 //this code was originally on the home.js app but was moved here for future reusability.

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState (true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
              if(!res.ok) {
                throw Error("Could not fetch the data for that resource");
              }
              return res.json();
            })
            .then(data => {
              setData(data);
              setIsPending(false);
              setError(null);
            })
            // catches any networking errors below
            .catch(err => {
              setIsPending(false);
              setError(err.message);
            })
      }, [url]); //url is a dependancy, whenever it changes the function is re-run

    // returning the 3 pieces of state we have set up from above
    return { data, isPending, error }
}

export default useFetch;