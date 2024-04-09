import React, { useState, useEffect } from "react";
import axios from "axios";

function Get() {
  const [getCount, setGetcount] = useState([]);
  const [updateCount, setUpdatecount] = useState([]);
  let get;
  let update;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://backend01-3.onrender.com/api/count")
      .then((response) => {
        setGetcount(response.data.addCount);
        setUpdatecount(response.data.updateCount);
        get = response.data.addCount;
        console.log(get);
        update = response.data.updateCount;
        console.log(update);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Count</h1>
      <p>Get Count: {getCount}</p>
      <p>Update Count: {updateCount}</p>
    </>
  );
}

export default Get;
