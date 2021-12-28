import { useState } from 'react';
import './App.css';
import Time from './Time';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className='App'>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        toggle
      </button>
      {show && <Time />}
    </div>
  );
}

export default App;
