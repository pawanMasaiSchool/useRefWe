import { useEffect, useRef, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timeRef = useRef();

  useEffect(() => {
    console.log("Now ", time);

    return () => {
      console.log("Cleaning");
      // clearInterval(timeRef.current);
    };
  }, []);

  const handlePause = () => {
    clearInterval(timeRef.current);
    setIsRunning(false);
  };

  const handleStart = () => {
    if (isRunning) {
      return;
    }
    timeRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    setIsRunning(true);
  };

  const hanldePStop = () => {
    setTime(0);
    handlePause();
    setIsRunning(false);
  };

  return (
    <>
      <h1>{time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={hanldePStop}>Stop</button>
    </>
  );
}
