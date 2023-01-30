import axios from "axios";
import { useEffect } from "react";
import { Wall } from "./Wall";
const FetchApi = ({ search, load, setload }) => {
  var i = 1;
  useEffect(() => {
    const fetchA = () => {
      // const url = `https://itunes.apple.com/search?term=${search}`;
      const promise = axios.get(url);
      promise
        .then((data) => {
          setload(data?.data?.results);
        
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchA();
  }, [search]);

  return (
    <>
      <Wall load={load}/>
    </>
  );
};

export default FetchApi;
