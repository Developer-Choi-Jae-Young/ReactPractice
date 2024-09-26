import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [day, setDay] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDay(new Date());
    }, 1000);
  }, []);

  const formatDate = day.toLocaleDateString('ko-KR', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
  });
  const formatTime = day.toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>현재 시간</h1>
        <p>{formatDate}</p>
        <p>{formatTime}</p>
      </header>
    </div>
  );
}

export default App;
