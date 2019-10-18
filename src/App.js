import React, { useState, useEffect } from 'react';
import './App.css';
import { DateTime, Interval } from 'luxon'

function App() {

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const endOfService = DateTime.local(2020, 1, 25)
  const now = DateTime.local()
  const duration = Interval.fromDateTimes(now, endOfService)

  useEffect(() => {
    let ticker = setInterval(() => {
      setDays(Math.ceil(duration.length('days')))
      setHours(Math.ceil(duration.length('hours')))
      setMinutes(Math.ceil(duration.length('minutes')))
      setSeconds(Math.ceil(duration.length('seconds')))
    }, 1000)

    return () => {
      clearInterval(ticker)
    }
  }, [seconds, duration])

  return (
    <div className="App">
      <h1>{days} days</h1>
      <h2>{hours} hours</h2>
      <h3>{minutes} minutes</h3>
      <h4>{seconds} seconds</h4>
      <div>1 second = 1 pixel</div>
    </div>
  );
}

export default App;
