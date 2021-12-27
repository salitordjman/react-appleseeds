import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [query, setQuery] = useState("");
  const [term, setTerm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [filterTerm, setFilterTerm] = useState([]);

  const PROXY_URL = "https://intense-mesa-62220.herokuapp.com/";
  const API_URL = "https://randomuser.me/api/?results=100";

  useEffect(() => {
    setIsLoading(true);
    setErrorMsg("");
    const search = async () => {
      try {
        const { data } = await axios.get(`${PROXY_URL}${API_URL}`);
        setTerm(data.results);
        setFilterTerm(data.results);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setErrorMsg(e.message);
      }
    };
    search();
  }, []);

  useEffect(() => {
    const res = filterTerm.filter((onePerson) => {
      return onePerson.name.first.toLowerCase().startsWith(query.toLowerCase());
    });
    setTerm(res);
  }, [query, filterTerm]);

  const avatarResults = term.map((result) => {
    return (
      <div key={result.cell} className="person">
        <h4>
          {result.name.first} {result.name.last}
        </h4>
        <img src={result.picture.large} alt="person" />
      </div>
    );
  });
  return (
    <>
      <input
        type="text"
        placeholder="Filter Avatars"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input"
      />
      <button>filter</button>
      <div>
        {errorMsg && <h1 style={{ color: "red" }}>{errorMsg}</h1>}
        {isLoading && <div>Loading...</div>}
        <div className="all">{avatarResults}</div>
      </div>
    </>
  );
};

export default App;
