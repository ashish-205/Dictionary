import { useRef, useState, useEffect } from "react";
import axios from "axios";

import { Audio } from "./Audio";
import { Example } from "./Example";
import { Definition } from "./Definition";

export const SearchAndButton = () => {
  const extract = useRef(null);
  const [search, setsearch] = useState("Enthusiasm");
  const [sahi, setsahi] = useState([]);

  useEffect(() => {
    const fetchapi = () => {
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
      const promise = axios.request(url);
      promise
        .then((data) => {
          const array = data?.data?.[0]?.meanings?.[0]?.definitions?.map(
            (e) => {
              return e?.definition;
            }
          );
          const array1 = data?.data?.[0]?.phonetics?.map((e) => {
            return e?.audio;
          });
          const array2 = data?.data?.[0]?.meanings?.[0]?.definitions;
          const full = [array, array1, array2];

          setsahi(full);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchapi();
  }, [search]);

  const Search = () => {
    setsearch(extract?.current?.value);
  };
  window.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
      Search();
    }
  });
  return (
    <>
      <div className="input-group mb-3">
        <input
          ref={extract}
          type="text"
          className="form-control border border-info rounded"
          placeholder="Search A Word"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button onClick={Search} className="btn btn-primary" type="button">
            Search
          </button>
        </div>
      </div>
      <Audio sore={sahi} />
      <Example sabga={sahi} />
      <Definition custom={search} sale={sahi} />
    </>
  );
};
