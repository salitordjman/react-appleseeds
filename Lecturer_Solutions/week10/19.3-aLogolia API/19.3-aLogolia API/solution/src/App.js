import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("hooks");
  const [search, setSearch] = useState("hooks");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setErrorMsg("");
      setIsLoading(true);
      try {
        const result = await axios.get(
          `https://hn.algolia.com/api/v1/search?query=${search}`
        );
        setData(result.data);
      } catch (e) {
        setErrorMsg(e.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [search]);

  const renderList = () => {
    return (
      <ul>
        {data.hits.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>Algolia search</h1>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={() => setSearch(query)}>Search</button>
      {isLoading && <div>Loading...</div>}
      {errorMsg && <h3 style={{ color: "red" }}>{errorMsg}</h3>}
      {data && renderList()}
    </div>
  );
}

export default App;
