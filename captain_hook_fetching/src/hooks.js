import { useState, useEffect } from "react"; //Import useSt/useEff hooks

//Passing a url to the function.

function useFetch(url) {

  //Using the useState hook to define the inital state for data&loading and a function to update it.

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //Fetch (url), waiting for the response then receiving the data in json, setting the data/loading states.

  async function fetchUrl() {
    const response = await fetch(url); //Until the fetch is given to response(block running)
    const json = await response.json(); //Adding the response in json.
    setData(json);
    setLoading(false);
  }
  
  //useEffect hook. When the file loads-->run fetchUrl (our async function).

  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading]; //returning with the values of data/loading.

}

export { useFetch };