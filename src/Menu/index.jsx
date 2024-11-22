import { useRef, useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0); // Sekundlarni saqlash uchun state
  const intervalRef = useRef(null); // intervalni saqlash uchun ref

  useEffect(() => {
    // Timer ishga tushirilmoqda
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1); // har bir sekundda vaqtni oshirish
    }, 1000);

    // Komponent unmount bo'lganda intervalni to'xtatish
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const stopTimer = () => {
    clearInterval(intervalRef.current); // Intervalni to'xtatish
  };

  const resetTimer = () => {
    setTime(0); // Vaqtni 0 ga o'rnatish
    clearInterval(intervalRef.current); // Timer to'xtatiladi
    // Timer qaytadan boshlanadi
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  return (
    <div>
      <h1>Time: {time} seconds</h1>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;


git remote add origin https://github.com/MukhriddinToshboyev/To-Do-List.git
git branch -M main
git push -u origin main