import React, { useState, useEffect } from "react";
// import Starting from "./components/Starting";
import "./App.css";
import axios from "axios";

const App = () => {
  const [term, setTerm] = useState("");
  const PROXY_URL = "https://intense-mesa-62220.herokuapp.com/";
  const API_URL = "https://swapi.dev/api/films/1";

  console.log(term);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(`${PROXY_URL}${API_URL}`);
      setTerm(data);
    };
    search();
  }, []);
  const renderedResults = (
    <div>
      <div>Title: {term.title}</div>
      <div>Director: {term.director}</div>
    </div>
  );
  return <div className="all">{term && renderedResults}</div>;
  // const renderedResults = term.map((result) => {
  //   console.log(result);

  //   return (
  //     <div key={result.title}>
  //       <div>Title: {result.title}</div>
  //       <div>Director: {result.director}</div>
  //     </div>
  //   );
  // });
  // return <div className="all">{renderedResults}</div>;
};

export default App;
