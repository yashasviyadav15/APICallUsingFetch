import React from "react";
import { useState, useEffect } from "react";
import UseApiCall from "./useApiCall";
const App = () => {
  const urls = "https://jsonplaceholder.typicode.com/todos/1";
  const [inputval, setinputval] = useState("");
  const { data, isloading, fetchdata } = UseApiCall();
  const handleClick = () => {
    fetchdata(inputval);
    handleClear();
  };
  const handleClear = () => {
    setinputval("");
  };
  return (
    <>
      {isloading ? (
        <h1>Loading, please wait...</h1>
      ) : (
        <>
        <p>Test URL : 
          <span><br/>{urls}</span>
          </p>
          <input
            type="text"
            value={inputval}
            onChange={(e) => setinputval(e.target.value)}
          />
          <button onClick={handleClick}>click</button>
          <div>
            <h2> {data.title}</h2>
          </div>
        </>
      )}
    </>
  );
};
export default App;
