import "./App.css";
import { useRef, useState, useEffect } from "react";

function App() {
  const [clicked, setClicked] = useState(false);
  const videoRef = useRef();
  useEffect(() => {
    clicked ? videoRef.current.play() : videoRef.current.pause();
  }, [clicked]);

  return (
    <div>
      <div>
        <video
          width={600}
          height={400}
          ref={videoRef}
          src="https://www.w3schools.com/html/movie.mp4"
          type="video/mp4"
        ></video>
      </div>

      <button
        onClick={() => {
          setClicked(true);
          // videoRef.current.play();
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          // videoRef.current.pause();
          setClicked(false);
        }}
      >
        Pause
      </button>
    </div>
  );
}

export default App;
