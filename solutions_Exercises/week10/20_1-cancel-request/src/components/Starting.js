import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

const Starting = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [term, setTerm] = useState([]);
  const PROXY_URL = "https://intense-mesa-62220.herokuapp.com/";
  const API_URL = "https://randomuser.me/api/?results=1";
  useEffect(() => {
    const source = axios.CancelToken.source();
    setIsLoading(true);
    setErrorMsg("");
    const search = async () => {
      try {
        const { data } = await axios.get(`${PROXY_URL}${API_URL}`, {
          cancelToken: source.token,
        });
        setTerm(data.results[0].email);
        setIsLoading(false);
      } catch (e) {
        setErrorMsg(e.message);
        console.log(e);
        if (axios.isCancel(e)) return;
      }
    };
    search();
    return () => source.cancel();
  }, []);

  return (
    <div className="time">
      {term}
      {errorMsg && <h1 style={{ color: "red" }}>{errorMsg}</h1>}
      {isLoading && <div>Loading....</div>}
    </div>
  );
};
export default Starting;
