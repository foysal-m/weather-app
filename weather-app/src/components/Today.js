import React, { useContext } from 'react'

import { WeatherContext } from '../App'
import getIcon from '../icon'

function Today() {
  const { today, animateTemp } = useContext(WeatherContext)

  return (
    <div className="card">
      <div className="day-celcius">
        <h3 className="day">{today.day ? today.day.slice(0, 3) : ''}</h3>
        <h3 className={animateTemp() || 'basic'}>
          {today.temp && Math.floor(+today.temp) + '°'}
        </h3>
      </div>
      <div className="img-card">
        <img src={getIcon(today)} alt="" className="w-icon" />
        <h3>{today.desc}</h3>
      </div>
    </div>
  )
}

export default Today
