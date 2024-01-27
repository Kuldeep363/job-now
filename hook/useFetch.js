import { useEffect, useState } from "react";
import axios from "axios";
import { popularJobData } from "./data";

const useFetch = (endpoint, query ) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
    //   "X-RapidAPI-Key": "e6c76b2793msh4efb5c5df24be0cp16c9e8jsn34a7c02ce727",
      "X-RapidAPI-Key": "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
    //   console.log(response.data.data);
      setData(response.data.data);
    //   setData(popularJobData);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(()=>{
    fetchData();
  },[]);

  const refetch = ()=>{
    fetchData();
  }

  return {data,isLoading,error,refetch}

};

export default useFetch;
