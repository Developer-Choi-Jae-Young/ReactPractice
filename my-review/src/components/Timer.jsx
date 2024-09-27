import { useState, useEffect } from 'react';

let timer;

function Timer() {
    const [day, setDay] = useState(new Date());

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

    useEffect(() => {
        timer = setInterval(() => {
            setDay(new Date());
        }, 1000);

        return() => {
            clearInterval(timer);
        }
    }, []);

    return (
        <>
            <h1>현재 시간</h1>
            <p>{formatDate}</p>
            <p>{formatTime}</p>
        </>
    );
}

export default Timer;