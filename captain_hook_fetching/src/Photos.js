import React from "react";
import { useFetch } from "./hooks"; //Importing useFetch hook

function Photos() {

  //Using our useFetch hook to get the data/loading 

  const [data, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/photos?albumId=1"
  );

  //If loading(true)--> render("Loading...") else using map on data creating an unordered list where we givin each list item a unique key and setting our img src to the url. 

  return (
    <>
      <h1>Photos</h1>
      {loading ? (
        "Loading..."
      ) : (
        <ul>
          {data.map(({ id, title, url }) => (
            <li key={`photo-${id}`}>
              <img alt={title} src={url} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Photos;