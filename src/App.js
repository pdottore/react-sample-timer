import { useCallback, useEffect, useState } from 'react';

let timerID = 0;
const Timer = () => {
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    timerID++;
    const timer = setInterval(() => {
      setCount((currentCount) => {
        console.log(`Timer ${timerID} starts ${currentCount}`);
        return currentCount + 1
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, []);
  return <div>Timer: {count}</div>;
};


const App = () => {
  const [index, setIndex] = useState(0);
  const updateIndex = useCallback(() => setIndex(index + 1), [index]);
  return (
    <div className='App'>
      <Timer key={index} />
      <div>
        <button onClick={updateIndex}>Update Index</button>
      </div>
    </div>
  );
};

export default App
