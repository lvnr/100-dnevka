import React, { useState, useEffect } from 'react';
import './App.css';
import { DateTime, Interval } from 'luxon'

import Artash from './Artash'

function App() {

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const totalSeconds = 100 * 24 * 60 * 60 // 100 days in seconds
  const daySeconds = 24 * 60 * 60

  const endOfService = DateTime.local(2020, 1, 25)
  const now = DateTime.local()
  const duration = Interval.fromDateTimes(now, endOfService)
  const todaySeconds = Interval.fromDateTimes(DateTime.local().startOf('day'), DateTime.local()).length('seconds')

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
      <div className='time'>
        <h1>{days} days</h1>
        <h2>{hours} hours</h2>
        <h3>{minutes} minutes</h3>
        <h4>{seconds} seconds</h4>
        <div>1 second = 10 pixel</div>
      </div>
      <div className='timeline' style={{ width: daySeconds * 10 + 'px' }}>
        <span>{days}</span>
        <span>{days-1}</span>
        <div className='ticks'>
          {new Array(24 * 60).fill(null).map((_, i) => (
            <div key={i} style={{ left: i * 600 + 'px' }}>
              {i}
            </div>
          ))}
        </div>
        <Artash location={todaySeconds * 10} />
      </div>
    </div>
  );
}

export default App;
