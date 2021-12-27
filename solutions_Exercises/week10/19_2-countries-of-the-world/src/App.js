import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [term, setTerm] = useState([]);
  const [filterTerm, setFilterTerm] = useState([]);
  // const [newResult, setNewResult] = useState("");
  const PROXY_URL = "https://intense-mesa-62220.herokuapp.com/";
  const API_URL = "https://restcountries.com/v2/all";

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(`${PROXY_URL}${API_URL}`);
      setTerm(data);
      setFilterTerm(data);
    };
    search();
  }, []);
  const countriesResults = term.map((result) => {
    return <li key={result.alpha2Code}>{result.name}</li>;
  });
  const showSearch = (mySearch) => {
    const res = filterTerm.filter((oneCountry) => {
      return oneCountry.name.toLowerCase().startsWith(mySearch.toLowerCase());
    });
    setTerm(res);
  };

  //!חיפוש בכל המדינה גם באמצע
  // useEffect(() => {
  //   const res = term.filter((oneCountry) => {
  //     return oneCountry.name.toLowerCase().includes(newResult.toLowerCase());
  //   });
  //   console.log(res);
  // }, [newResult]);
  return (
    <>
      <label>Search</label>
      <input
        type="text"
        onChange={(e) => showSearch(e.target.value)}
        className="input"
      />
      <div>
        <ul>{countriesResults}</ul>
      </div>
    </>
  );
};

export default App;

// import React, { useState, useEffect } from "react";
// import "./App.css";
// import axios from "axios";

// const App = () => {
//   const [term, setTerm] = useState([]);
//   const [filterTerm, setFilterTerm] = useState([]);
//   const [newResult, setNewResult] = useState("");
//   const PROXY_URL = "https://intense-mesa-62220.herokuapp.com/";
//   const API_URL = "https://restcountries.com/v2/all";

//   useEffect(() => {
//     const search = async () => {
//       const { data } = await axios.get(`${PROXY_URL}${API_URL}`);
//       setTerm(data);
//       setFilterTerm(data);
//     };
//     search();
//   }, []);
//   const countriesResults = term.map((result) => {
//     return <li key={result.alpha2Code}>{result.name}</li>;
//   });
//   useEffect(() => {
//     const res = filterTerm.filter((oneCountry) => {
//       return oneCountry.name.toLowerCase().startsWith(newResult.toLowerCase());
//     });
//     console.log(res);
//     setTerm(res);
//   }, [newResult]);

//   //!חיפוש בכל המדינה גם באמצע
//   // useEffect(() => {
//   //   const res = term.filter((oneCountry) => {
//   //     return oneCountry.name.toLowerCase().includes(newResult.toLowerCase());
//   //   });
//   //   console.log(res);
//   // }, [newResult]);
//   return (
//     <>
//       <label>Search</label>
//       <input
//         type="text"
//         value={newResult}
//         onChange={(e) => setNewResult(e.target.value)}
//         className="input"
//       />
//       <div>
//         <ul>{countriesResults}</ul>
//       </div>
//     </>
//   );
// };

// export default App;
