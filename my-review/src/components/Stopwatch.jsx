import { useEffect, useState } from "react";

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [running, isRunning] = useState(false);

    let timer;

    useEffect(() => {

        if (running === true) {
            timer = setInterval(() => {
                setTime(time => time + 1);
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        }
    }, [running]);

    return (
        <>
            <h1>Stopwatch</h1>
            { parseInt(time/60) } : { parseInt(time % 60) } <br /><br />
            <button onClick={() => { isRunning(true) }}>Start</button>
            <button onClick={() => { isRunning(false) }}>Stop</button>
            <button onClick={() => { isRunning(false); setTime(0); }}>Reset</button>
        </>
    );
}

export default Stopwatch;