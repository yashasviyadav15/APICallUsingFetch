import React from "react";
import { useEffect, useState } from "react";

const UseApiCall = () => {
  const [data, setdata] = useState("");
  const [isloading, setisloading] = useState(false);

  const fetchdata = async (url) => {
    setisloading(true);
    const response = await fetch(url);
    const result = await response.json();
    setdata(result);
    setisloading(false);
  };
  return { data, isloading, fetchdata };
};
export default UseApiCall;
