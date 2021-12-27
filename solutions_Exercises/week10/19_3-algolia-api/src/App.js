import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [query, setQuery] = useState("hooks");
  const [term, setTerm] = useState([]);
  const [click, setClick] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const PROXY_URL = "https://intense-mesa-62220.herokuapp.com/";
  const API_URL = `https://hn.algolia.com/api/v1/search?query=${query}`;

  useEffect(() => {
    setIsLoading(true);
    setErrorMsg("");
    const search = async () => {
      try {
        const { data } = await axios.get(`${PROXY_URL}${API_URL}`);
        setTerm(data.hits);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setErrorMsg(e.message);
      }
    };
    search();
  }, [click]);
  const countriesResults = term.map((result) => {
    if (result.title) {
      return (
        <li key={result.objectID}>
          <a href={result.url} target="_blank" rel="noopener noreferrer">
            {result.title}
          </a>
        </li>
      );
    } else if (result.story_title) {
      return (
        <li key={result.objectID}>
          <a href={result.story_url} rel="noopener noreferrer" target="_blank">
            {result.story_title}
          </a>
        </li>
      );
    }
  });
  return (
    <>
      <h1>Algolia search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input"
      />
      <button onClick={() => setClick(!click)}>search</button>
      <div>
        {errorMsg && <h1 style={{ color: "red" }}>{errorMsg}</h1>}
        {isLoading && <div>Loading...</div>}
        <ul>{countriesResults}</ul>
      </div>
    </>
  );
};

export default App;
